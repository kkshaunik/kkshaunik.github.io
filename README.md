# NovaStack Labs Website

This repository hosts the website for **NovaStack Labs**. It is built with Node.js/Express and uses a SQLite database to store course registration requests. An admin interface allows viewing submitted data after logging in.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Set environment variables for admin access:
   - `ADMIN_USERNAME`
   - `ADMIN_PASSWORD`
   - Optional: `SESSION_SECRET`

## Deployment

A GitHub Actions workflow (`.github/workflows/deploy.yml`) runs tests and triggers a Render deployment using the `RENDER_DEPLOY_HOOK` secret on pushes to `main`.
