Dev.sh | Blog
- web app for my personal blogs.
## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
## Introduction
It is a personal blog app that list down any blog i've been saved in database and displays it, wheter it is a plaintext or a markdown file.

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
  
## Getting Started
1. Clone the repository:

```bash
git clone https://github.com/SD191100/myBlog.git
```

2. Navigate to the server directory and install dependencies:

```bash
cd server
npm i
```

3. Start the server:

```bash
node server.js
```
4. Navigate to the client directory and install dependencies:

```bash
cd ../client
npm i
```
6. Start the React app:

```bash
npm run dev
```

Project Structure
```bash
.
├── client
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── public
│   │   └── logo.svg
│   ├── README.md
│   ├── src
│   │   ├── App.jsx
│   │   ├── components
│   │   │   ├── Content.jsx
│   │   │   ├── Date.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Nav.jsx
│   │   │   ├── Post.jsx
│   │   │   ├── Tag.jsx
│   │   │   └── Title.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── screens
│   │       ├── Error.jsx
│   │       ├── Explore.jsx
│   │       ├── Home.jsx
│   │       ├── NewPost.jsx
│   │       ├── Posts.jsx
│   │       └── TagList.jsx
│   ├── tailwind.config.js
│   └── vite.config.js
└── server
    ├── controllers
    │   ├── postControllers.js
    │   └── tagControllers.js
    ├── models
    │   ├── Post.js
    │   └── Tags.js
    ├── package.json
    ├── package-lock.json
    ├── routes
    │   ├── Posts.js
    │   └── Tags.js
    └── server.js
```

Technologies Used
- React
- Node.js
- MongoDB
- Tailwind
