# Spotify Backend 🎵

A basic Spotify Backend application built using **Node.js, Express.js, MongoDB and Mongoose**.

This project is created for learning Backend Development and is inspired by the Backend Development course from **Sheryians Coding School**.

---

## 🚀 Features

- User Registration
- User Login
- Password Hashing using Bcrypt
- JWT Authentication
- Cookie-based Authentication
- Role-Based Authorization
- Music Management
- Album Management
- File Upload
- MongoDB Database
- Request Validation

---

## 👥 User Roles

This application has two types of users:

### Normal User

A Normal User can:

- Register
- Login
- Listen to Music
- Get Music
- Get All Albums
- Get Album by ID

A Normal User **cannot create Music or Albums**.

### Artist

An Artist can:

- Register
- Login
- Listen to Music
- Get Music
- Get All Albums
- Get Album by ID
- Create Music
- Create Albums

Artist-specific operations are protected using **Role-Based Authorization**.

---

## 🔐 Authentication & Authorization

The project uses **JWT Authentication** and **Role-Based Authorization**.

### Authentication Flow

```text
User
  ↓
Register
  ↓
Password Hashing using Bcrypt
  ↓
User Stored in MongoDB
  ↓
Login
  ↓
JWT Token Generated
  ↓
Token Stored in Cookie
  ↓
Protected API Access

Request
   ↓
Authentication Middleware
   ↓
Check JWT Token
   ↓
Identify User
   ↓
Check User Role
   ↓
┌───────────────────────┬───────────────────────┐
│     Normal User       │        Artist         │
│                       │                       │
│ Listen Music          │ Listen Music          │
│ Get Music             │ Get Music             │
│ Get Albums            │ Get Albums            │
│ Get Album by ID       │ Get Album by ID       │
│                       │ Create Music          │
│                       │ Create Album          │
└───────────────────────┴───────────────────────┘

🛠️ Tech Stack
- Node.js - JavaScript Runtime
- Express.js - Backend Framework
- MongoDB - Database
- Mongoose - MongoDB ODM
- JWT - Authentication
- Bcrypt - Password Hashing
- Express Validator - Request Validation
- Multer - File Upload
- ImageKit - File Storage


📁Project Structure
Spotify_Backend/
│
├── src/
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── music.controller.js
│   │
│   ├── db/
│   │   └── db.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── music.middleware.js
│   │   └── validation.middleware.js
│   │
│   ├── model/
│   │   ├── album.model.js
│   │   ├── music.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── music.routes.js
│   │
│   ├── services/
│   │   └── storage.services.js
│   │
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
