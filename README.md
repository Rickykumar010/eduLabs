# Task Management API

## Project Overview

This is a Task Management API built using Node.js, Express, and MongoDB. It includes functionality for user authentication and authorization, allowing only admins to manage tasks. The API supports CRUD operations for tasks and user management with role-based access control.

## Features

- User registration and login
- Role-based access control (Admin role required for task management)
- Task CRUD operations (Create, Read, Update, Delete)
- JWT-based authentication

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt (for password hashing)

### Prerequisites.

- Node.js (v14 or higher)
- MongoDB (local or remote instance)

### Overview of Endpoints

#### 1. **User Registration**
- **URL:** `/register`
- **Method:** `POST`
- **Request Example:**
    ```json
    {
      "name": "John Doe",
      "email": "admin@example.com",
      "password": "password123",
      "role": "admin"
    }
    ```

#### 2. **User Login**
- **URL:** `/login`
- **Method:** `POST`
- **Request Example:**
    ```json
    {
      "email": "admin@example.com",
      "password": "password123"
    }
    ```

#### 3. **Admin Access Example**
- **URL:** `/admin`
- **Method:** `GET`
- **Headers:**
    ```plaintext
    Authorization: Bearer your_jwt_token
    ```

#### 4. **Create a New Task**
- **URL:** `/tasks`
- **Method:** `POST`
- **Headers:**
    ```plaintext
    Authorization: Bearer your_jwt_token
    ```
- **Request Example:**
    ```json
    {
      "title": "New Task",
      "description": "Task description",
      "status": "pending",
      "priority": "high"
    }

    #### 4. **Create a New Task**
- **URL:** `/tasks/:id`
- **Method:** `PUT`
- **Headers:**
    ```plaintext
    Authorization: Bearer your_jwt_token
    ```
- **Request Example:**
    ```json
    {
      "title": "New Task updated",
      "description": "Task description",
      "status": "pending",
      "priority": "high"
    }
    #### 4. **Update a New Task**
- **URL:** `/tasks/:id`
- **Method:** `DELETE`
- **Headers:**
    ```plaintext
    Authorization: Bearer your_jwt_token
    ```

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rickykumar010/eduLabs.git
   
1. **Running Server:**
- npm start
