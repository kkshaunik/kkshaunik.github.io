const express = require('express');
const session = require('express-session');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database('data.sqlite');

// Initialize database
db.run(`CREATE TABLE IF NOT EXISTS interests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  phone TEXT,
  course TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'devsecret',
  resave: false,
  saveUninitialized: false
}));

// Serve static files
app.use(express.static(__dirname));

// API endpoint to save interest
app.post('/api/interest', (req, res) => {
  const { name, email, phone, course } = req.body;
  db.run(
    'INSERT INTO interests (name, email, phone, course) VALUES (?, ?, ?, ?)',
    [name, email, phone, course],
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'database error' });
      }
      res.json({ success: true, id: this.lastID });
    }
  );
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = process.env.ADMIN_USERNAME || 'admin';
  const pass = process.env.ADMIN_PASSWORD || 'password';
  if (username === user && password === pass) {
    req.session.authenticated = true;
    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'invalid credentials' });
  }
});

function requireAuth(req, res, next) {
  if (req.session && req.session.authenticated) return next();
  res.status(401).json({ error: 'unauthorized' });
}

// Serve admin page
app.get('/admin', (req, res) => {
  if (req.session && req.session.authenticated) {
    res.sendFile(path.join(__dirname, 'admin.html'));
  } else {
    res.redirect('/login');
  }
});

// Serve login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Endpoint to fetch data
app.get('/admin/data', requireAuth, (req, res) => {
  db.all('SELECT id, name, email, phone, course, created_at FROM interests ORDER BY created_at DESC', (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'database error' });
    }
    res.json(rows);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
