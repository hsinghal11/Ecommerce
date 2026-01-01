# 🛒 E-Commerce Platform

> **A full-stack, production-ready e-commerce application built to demonstrate advanced web development concepts, secure authentication, and scalable architecture.**

![Project Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)

## 🚀 Overview

This project is a robust E-commerce platform designed to simulate a real-world online shopping experience. It features a complete user journey from product discovery to secure checkout, underpinned by a secure and efficient backend.

The goal of this project was to master **full-stack JavaScript development**, focusing on the MVC architecture, RESTful API design, and data security. It showcases the ability to build complex, stateful applications using the **MERN stack ecosystem** (MongoDB, Express, Node.js) with server-side rendering via EJS.

## ✨ Key Features

This application includes a wide range of features expected in modern web applications:

*   **🔐 Secure Authentication & Authorization**:
    *   User registration and login using **Passport.js**.
    *   Role-based access control (Admin/Seller vs. Buyer).
    *   Secure session management with **Express-Session** and separate MongoStore for persistence.
    *   Password hashing and salting.
*   **📦 Product Management (CRUD)**:
    *   Sellers can add, edit, and delete products to the catalogue.
    *   Rich text descriptions and image handling.
*   **⭐ Interactive Review System**:
    *   Users can leave star ratings and text reviews for products.
    *   Real-time validation for review submissions.
*   **🛒 Dynamic Shopping Cart**:
    *   Add/remove items functionality.
    *   Persistent cart state across sessions.
    *   Real-time total calculation.
*   **💳 Payment Integration**:
    *   Integrated Payment Gateway for secure checkout processing.
*   **🛡️ Security & Best Practices**:
    *   **Data Validation**: Server-side validation using **Joi** schema validation.
    *   **Sanitization**: Protection against XSS and NoSQL injection attacks using `express-mongo-sanitize` and `sanitize-html`.
    *   **Environment Variables**: Secure configuration using `dotenv`.

## 🛠️ Tech Stack

This project leverages the power of the JavaScript ecosystem:

### Backend
*   **Node.js**: As the runtime environment.
*   **Express.js**: For building robust RESTful APIs and handling routing.
*   **MongoDB & Mongoose**: For flexible, schema-based data modeling (NoSQL).
*   **Passport.js**: For robust authentication strategies.

### Frontend
*   **EJS (Embedded JavaScript)**: For server-side templating and dynamic HTML rendering.
*   **Bootstrap 5**: For responsive, mobile-first design and pre-built components.
*   **Vanilla JavaScript**: For client-side interactivity and form validation.

### Tools & DevOps
*   **Git & GitHub**: For version control.
*   **NPM**: For package management.
*   **Postman**: For API testing and debugging.

## 💡 Skills Demonstrated

Building this project required proficiency in the following key areas:

*   **MVC Architecture**:Structuring code into Models, Views, and Controllers for maintainability.
*   **REST API Design**: Creating standard, predictable endpoints for resource manipulation.
*   **Database Relationships**: Managing complex relationships (One-to-Many) between Users, Products, and Reviews in MongoDB.
*   **Middleware Development**: Writing custom middleware for authentication checks and error handling.
*   **Session Handling**: Understanding state management in a stateless HTTP protocol.
*   **Error Handling**: Implementing global error handling for a smooth user experience.

## ⚙️ Installation & Setup

Want to run this locally? Follow these steps:

1.  **Clone the repository**
    ```bash
    git clone <repository_url>
    cd E-commerce-EJS
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add the following:
    ```env
    dbURL=mongodb://localhost:27017/shopping-sam-app-2  # Or your MongoDB Atlas URL
    SECRET=your_super_secret_key
    ```

4.  **Seed the Database (Optional)**
    To populate the database with initial dummy data:
    ```bash
    node seed.js
    ```

5.  **Run the Application**
    ```bash
    npm start
    ```

6.  **Visit the App**
    Open your browser and navigate to `http://localhost:5000`

---

*Built with ❤️ by Himanshu Singhal*
