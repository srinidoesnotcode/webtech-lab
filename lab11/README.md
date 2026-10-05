# Blog Management System

A full-stack blog application for creating, viewing, editing, and deleting posts.

**React (Vite) → Express REST API → MongoDB**

## Features

- Create, view, edit, and delete posts
- Add title, author, and content
- React frontend
- Express.js backend
- MongoDB database
- REST API

## API

| Method | Route | Purpose |
|---|---|---|
| GET | `/api/posts` | Get all posts |
| GET | `/api/posts/:id` | Get a post |
| POST | `/api/posts` | Create a post |
| PUT | `/api/posts/:id` | Update a post |
| DELETE | `/api/posts/:id` | Delete a post |

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd blog-management
```

### 2. Start the backend

```bash
cd server
npm install
```

Create a `.env` file in the `server` folder:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Then start the server:

```bash
npm start
```

### 3. Start the frontend

Open a **new terminal** in the project folder:

```bash
cd app
npm install
npm run dev
```

Open the URL shown by Vite in your browser.

> Keep `.env` in `.gitignore` to protect your MongoDB credentials.
