// Data for all courses offered at NovaStack Labs
const courses = [
  {
    title: 'HTML & CSS Fundamentals',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹2,500',
    description: 'Start your web journey with semantic HTML5 and modern CSS3.',
    outcomes: [
      'Create responsive layouts using Flexbox and Grid',
      'Understand web accessibility and semantics',
      'Project: Personal portfolio site (maps to first-year programming lab)'
    ]
  },
  {
    title: 'JavaScript Essentials',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹2,500',
    description: 'Learn core JavaScript concepts for dynamic webpages.',
    outcomes: [
      'Manipulate DOM and handle browser events',
      'Write modular ES6 code and use fetch API',
      'Project: Interactive game reinforcing logic building'
    ]
  },
  {
    title: 'ReactJS Development',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '6 Weeks',
    fees: '₹4,500',
    description: 'Build modern single-page applications with React.',
    outcomes: [
      'Create components, manage state and props',
      'Integrate REST APIs to build CRUD apps (aligned with DBMS & OOPs)',
      'Deploy apps to GitHub Pages'
    ]
  },
  {
    title: 'Node.js & Express.js',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '6 Weeks',
    fees: '₹4,500',
    description: 'Server-side JavaScript development with Node and Express.',
    outcomes: [
      'Build RESTful APIs and middleware',
      'Connect to MongoDB and MySQL databases',
      'Project: API for a blog platform (aligns with DBMS course)'
    ]
  },
  {
    title: 'MongoDB & MySQL Databases',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹3,000',
    description: 'Understand NoSQL and relational databases.',
    outcomes: [
      'Design schemas and perform CRUD operations',
      'Write optimized SQL queries',
      'Project: Student database system (maps to DBMS laboratory)'
    ]
  },
  {
    title: 'Django & Flask Web Frameworks',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '6 Weeks',
    fees: '₹4,500',
    description: 'Python-based web development using Django and Flask.',
    outcomes: [
      'Build MVC web apps and RESTful services',
      'Implement authentication & ORM models',
      'Project: Mini e-commerce site (aligns with Software Engineering)'
    ]
  },
  {
    title: 'Angular Development',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '6 Weeks',
    fees: '₹4,500',
    description: 'Frontend development with Google’s Angular framework.',
    outcomes: [
      'Use TypeScript and RxJS for reactive apps',
      'Implement component-based architecture',
      'Project: Dashboard app linked to REST APIs'
    ]
  },
  {
    title: 'Building REST APIs',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '4 Weeks',
    fees: '₹3,500',
    description: 'Design and implement RESTful services.',
    outcomes: [
      'Use Express or Django REST Framework',
      'Handle authentication and testing',
      'Project: API for inventory management (aligns with DBMS)'
    ]
  },
  {
    title: 'Android App Development (Kotlin)',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '6 Weeks',
    fees: '₹4,000',
    description: 'Create native Android apps using Kotlin.',
    outcomes: [
      'Design UI with XML and Jetpack',
      'Consume REST APIs and store data locally',
      'Project: To-do app aligning with OOP principles'
    ]
  },
  {
    title: 'iOS App Development (Swift)',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '6 Weeks',
    fees: '₹4,500',
    description: 'Develop iOS applications with Swift and Xcode.',
    outcomes: [
      'Use SwiftUI for interface design',
      'Handle networking and persistence',
      'Project: News reader app for App Store'
    ]
  },
  {
    title: 'Flutter Cross-Platform Apps',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '6 Weeks',
    fees: '₹4,500',
    description: 'Build beautiful apps for Android & iOS using Flutter.',
    outcomes: [
      'Use Dart and widget trees',
      'Connect to Firebase for backend services',
      'Project: Chat application (aligns with Networking course)'
    ]
  },
  {
    title: 'React Native Development',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '6 Weeks',
    fees: '₹4,500',
    description: 'Create cross-platform mobile apps with React Native.',
    outcomes: [
      'Utilize native modules and navigation',
      'Build apps consuming REST APIs',
      'Project: Expense tracker app'
    ]
  },
  {
    title: 'AWS Cloud Fundamentals',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹3,500',
    description: 'Kickstart your cloud journey with Amazon Web Services.',
    outcomes: [
      'Understand EC2, S3, IAM basics',
      'Deploy static and dynamic websites',
      'Project: Host a web app on AWS (maps to Distributed Systems)'
    ]
  },
  {
    title: 'Microsoft Azure Basics',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹3,500',
    description: 'Explore compute and storage services on Azure.',
    outcomes: [
      'Create VMs and App Services',
      'Manage Azure databases',
      'Project: Deploy a web API to Azure'
    ]
  },
  {
    title: 'Docker & Kubernetes',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '6 Weeks',
    fees: '₹4,500',
    description: 'Containerization and orchestration for modern apps.',
    outcomes: [
      'Containerize applications with Docker',
      'Deploy microservices using Kubernetes',
      'Project: Scalable deployment aligning with Cloud Computing course'
    ]
  },
  {
    title: 'CI/CD with GitHub Actions',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '4 Weeks',
    fees: '₹3,500',
    description: 'Automate build and deployment pipelines.',
    outcomes: [
      'Write workflows for testing and deployment',
      'Integrate with Docker and cloud platforms',
      'Project: Pipeline for Node.js application'
    ]
  },
  {
    title: 'Linux Essentials',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹2,500',
    description: 'Command-line fundamentals for developers.',
    outcomes: [
      'Use bash commands and shell scripting',
      'Manage packages and permissions',
      'Project: Automate tasks using shell scripts'
    ]
  },
  {
    title: 'Git & GitHub Mastery',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹2,500',
    description: 'Version control workflows for teams.',
    outcomes: [
      'Manage branches and pull requests',
      'Resolve merge conflicts',
      'Project: Collaborative mini project on GitHub'
    ]
  },
  {
    title: 'Terraform & Infrastructure as Code',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '4 Weeks',
    fees: '₹3,500',
    description: 'Automate infrastructure provisioning with Terraform.',
    outcomes: [
      'Write reusable Terraform modules',
      'Provision AWS resources via code',
      'Project: Automated deployment environment'
    ]
  },
  {
    title: 'Serverless Architecture',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '4 Weeks',
    fees: '₹3,500',
    description: 'Build scalable apps without managing servers.',
    outcomes: [
      'Create AWS Lambda functions and API Gateway',
      'Use Firebase and DynamoDB',
      'Project: Event-driven serverless app'
    ]
  },
  {
    title: 'Python for Data Science',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹3,000',
    description: 'Python programming focused on data analysis.',
    outcomes: [
      'Use Jupyter notebooks',
      'Work with files and libraries',
      'Project: Data cleaning task (maps to Engineering Mathematics)'
    ]
  },
  {
    title: 'NumPy & Pandas',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹3,000',
    description: 'Data manipulation with Python libraries.',
    outcomes: [
      'Perform vectorized computations',
      'Handle datasets using DataFrames',
      'Project: Analyze student results dataset'
    ]
  },
  {
    title: 'Data Visualization with Matplotlib',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹3,000',
    description: 'Plotting and storytelling with data.',
    outcomes: [
      'Create plots and dashboards',
      'Customize charts for presentations',
      'Project: Visualize placement statistics'
    ]
  },
  {
    title: 'Machine Learning with scikit-learn',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '6 Weeks',
    fees: '₹4,500',
    description: 'Supervised and unsupervised ML using Python.',
    outcomes: [
      'Implement regression and classification models',
      'Evaluate model performance',
      'Project: Predict student grades (aligns with Probability & Statistics)'
    ]
  },
  {
    title: 'Deep Learning with TensorFlow & PyTorch',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '6 Weeks',
    fees: '₹4,500',
    description: 'Neural networks and deep learning frameworks.',
    outcomes: [
      'Build CNNs and RNNs',
      'Train models on GPUs',
      'Project: Handwritten digit recognition'
    ]
  },
  {
    title: 'Natural Language Processing',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '4 Weeks',
    fees: '₹3,500',
    description: 'Text processing and language models.',
    outcomes: [
      'Tokenization and sentiment analysis',
      'Build chatbots with NLP libraries',
      'Project: Movie review classifier'
    ]
  },
  {
    title: 'Computer Vision Basics',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '4 Weeks',
    fees: '₹3,500',
    description: 'Image processing techniques and OpenCV.',
    outcomes: [
      'Detect edges and objects',
      'Use pretrained models for recognition',
      'Project: Face detection system (aligns with Image Processing course)'
    ]
  },
  {
    title: 'Ethical Hacking Fundamentals',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹3,500',
    description: 'Basics of cybersecurity and ethical hacking.',
    outcomes: [
      'Understand vulnerabilities and attacks',
      'Use Kali Linux tools',
      'Project: Secure a vulnerable web app'
    ]
  },
  {
    title: 'Pen Testing & OWASP Top 10',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '6 Weeks',
    fees: '₹4,500',
    description: 'Hands-on penetration testing.',
    outcomes: [
      'Exploit common web vulnerabilities',
      'Perform security audits',
      'Project: Report on securing a web portal'
    ]
  },
  {
    title: 'Network Security Essentials',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹3,500',
    description: 'Secure network design and protocols.',
    outcomes: [
      'Configure firewalls and VPNs',
      'Understand encryption and SSL',
      'Project: Secure campus network design'
    ]
  },
  {
    title: 'C Programming Fundamentals',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹2,500',
    description: 'Begin programming with C language.',
    outcomes: [
      'Work with loops, arrays and functions',
      'Understand memory and pointers',
      'Project: Mini banking system (maps to first-year curriculum)'
    ]
  },
  {
    title: 'C++ with OOP',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹2,500',
    description: 'Object-oriented programming using C++.',
    outcomes: [
      'Create classes and templates',
      'Implement inheritance and polymorphism',
      'Project: Library management system'
    ]
  },
  {
    title: 'Java Programming',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹2,500',
    description: 'Core Java for beginners.',
    outcomes: [
      'Apply OOP principles',
      'Handle exceptions and file I/O',
      'Project: Student report generator'
    ]
  },
  {
    title: 'Python Programming',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹2,500',
    description: 'Programming basics using Python.',
    outcomes: [
      'Use data structures and functions',
      'Handle files and modules',
      'Project: Command-line calculator'
    ]
  },
  {
    title: 'Data Structures & Algorithms',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '6 Weeks',
    fees: '₹4,500',
    description: 'Essential DSA for coding interviews.',
    outcomes: [
      'Implement linked lists, trees, graphs',
      'Analyze time and space complexity',
      'Project: Competitive programming problem sets'
    ]
  },
  {
    title: 'Database Management Systems',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹3,000',
    description: 'Relational database concepts and SQL.',
    outcomes: [
      'Normalize databases',
      'Write joins and transactions',
      'Project: Online course database'
    ]
  },
  {
    title: 'Operating Systems',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹3,000',
    description: 'Principles of modern operating systems.',
    outcomes: [
      'Understand process scheduling and memory management',
      'Work with Linux system calls',
      'Project: Simulate round-robin scheduling'
    ]
  },
  {
    title: 'Solidity & Ethereum Basics',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹3,500',
    description: 'Blockchain fundamentals with Ethereum.',
    outcomes: [
      'Write smart contracts in Solidity',
      'Deploy on test networks',
      'Project: Token contract (aligns with Cryptography course)'
    ]
  },
  {
    title: 'Smart Contracts & DApps',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '6 Weeks',
    fees: '₹4,500',
    description: 'Decentralized app development.',
    outcomes: [
      'Interact with Web3.js',
      'Build frontend for blockchain apps',
      'Project: Voting DApp'
    ]
  },
  {
    title: 'UI/UX Design with Figma',
    category: 'Enthusiastic',
    level: 'Introductory',
    duration: '4 Weeks',
    fees: '₹3,000',
    description: 'Design principles for intuitive interfaces.',
    outcomes: [
      'Create wireframes and prototypes',
      'Understand design systems',
      'Project: Mockup for e-learning platform'
    ]
  },
  {
    title: 'System Design Fundamentals',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '4 Weeks',
    fees: '₹3,500',
    description: 'Design scalable distributed systems.',
    outcomes: [
      'Use design patterns and architecture diagrams',
      'Estimate capacity and performance',
      'Project: Design a social media platform (aligns with Software Engineering)'
    ]
  },
  {
    title: 'Competitive Programming',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '6 Weeks',
    fees: '₹4,500',
    description: 'Sharpen problem-solving for contests.',
    outcomes: [
      'Implement advanced algorithms',
      'Participate in timed coding challenges',
      'Project: Weekly contest and discussion'
    ]
  },
  {
    title: 'Interview Preparation Bootcamp',
    category: 'Enthusiastic',
    level: 'Advanced',
    duration: '4 Weeks',
    fees: '₹3,500',
    description: 'Crack technical interviews with confidence.',
    outcomes: [
      'Practice HR and technical questions',
      'Resume and LinkedIn optimization',
      'Mock interviews with feedback'
    ]
  },
  // 6 Weeks Training Courses
  {
    title: '6-Week Web Development Fundamentals',
    category: '6 Weeks',
    level: 'Introductory',
    duration: '6 Weeks',
    fees: '₹5,000',
    description: 'HTML, CSS, JavaScript basics for second-year students.',
    outcomes: [
      'Build responsive websites',
      'Project: College event site (aligns with OOP & DBMS)'
    ]
  },
  {
    title: '6-Week Advanced Java & OOP',
    category: '6 Weeks',
    level: 'Advanced',
    duration: '6 Weeks',
    fees: '₹7,500',
    description: 'Deep dive into object-oriented concepts using Java.',
    outcomes: [
      'Implement collections and multithreading',
      'Project: Management system using JDBC'
    ]
  },
  {
    title: '6-Week Data Structures with C++',
    category: '6 Weeks',
    level: 'Introductory',
    duration: '6 Weeks',
    fees: '₹5,000',
    description: 'Core DSA for 2nd year.',
    outcomes: [
      'Implement arrays, stacks, queues, trees',
      'Project: Mini search engine'
    ]
  },
  {
    title: '6-Week Database Management with SQL',
    category: '6 Weeks',
    level: 'Advanced',
    duration: '6 Weeks',
    fees: '₹7,500',
    description: 'Relational database design and optimization.',
    outcomes: [
      'Use triggers and stored procedures',
      'Project: Inventory management DB'
    ]
  },
  {
    title: '6-Week Python Programming',
    category: '6 Weeks',
    level: 'Introductory',
    duration: '6 Weeks',
    fees: '₹5,000',
    description: 'Python for automation and scripting.',
    outcomes: [
      'Write modules and packages',
      'Project: Data analysis scripts'
    ]
  },
  {
    title: '6-Week Frontend with React',
    category: '6 Weeks',
    level: 'Advanced',
    duration: '6 Weeks',
    fees: '₹7,500',
    description: 'SPA development for internship readiness.',
    outcomes: [
      'State management with hooks',
      'Project: Task manager app'
    ]
  },
  // 6 Months Training Courses
  {
    title: 'Full Stack Development Program',
    category: '6 Months',
    level: 'Advanced',
    duration: '6 Months',
    fees: '₹20,000',
    description: 'End-to-end web application development.',
    outcomes: [
      'MERN or Django stack projects',
      'Deploy scalable apps (aligns with major project)'
    ]
  },
  {
    title: 'Web Design & Development',
    category: '6 Months',
    level: 'Advanced',
    duration: '6 Months',
    fees: '₹15,000',
    description: 'UI/UX with front-end technologies.',
    outcomes: [
      'Design responsive interfaces',
      'Project: Multi-page corporate website'
    ]
  },
  {
    title: 'Data Science & Machine Learning',
    category: '6 Months',
    level: 'Advanced',
    duration: '6 Months',
    fees: '₹18,000',
    description: 'From data processing to predictive modeling.',
    outcomes: [
      'End-to-end ML pipeline',
      'Project: Capstone predictive analytics'
    ]
  },
  {
    title: 'Cloud & DevOps Specialist',
    category: '6 Months',
    level: 'Advanced',
    duration: '6 Months',
    fees: '₹18,000',
    description: 'Master cloud platforms and DevOps tools.',
    outcomes: [
      'Deploy microservices on cloud',
      'Project: CI/CD for containerized apps'
    ]
  },
  {
    title: 'Mobile App Development (Android & Flutter)',
    category: '6 Months',
    level: 'Advanced',
    duration: '6 Months',
    fees: '₹16,000',
    description: 'Build production-ready mobile apps.',
    outcomes: [
      'Publish apps to Play Store',
      'Project: Feature-rich mobile application'
    ]
  },
  {
    title: 'Cybersecurity & PenTesting',
    category: '6 Months',
    level: 'Advanced',
    duration: '6 Months',
    fees: '₹16,000',
    description: 'Secure systems and conduct penetration tests.',
    outcomes: [
      'Implement enterprise security',
      'Project: Pen-test report for simulated company'
    ]
  },
  {
    title: 'Blockchain & Web3 Developer',
    category: '6 Months',
    level: 'Advanced',
    duration: '6 Months',
    fees: '₹16,000',
    description: 'Develop decentralized applications.',
    outcomes: [
      'Smart contracts and DApps',
      'Project: Blockchain-based supply chain'
    ]
  }
];
