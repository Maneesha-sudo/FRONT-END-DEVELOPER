# Web Application Fundamentals

## Q1. Role of Frontend (FE)

The **Frontend (FE)** is the part of a web application that users directly see and interact with in the browser. Its main responsibility is to provide a smooth, responsive, and user-friendly experience.

### User Interface (UI)

* Frontend is responsible for designing and displaying the visual elements of the application such as buttons, forms, text, images, and layouts.
* It ensures the application looks clean, consistent, and works well on different screen sizes (responsive design).
* Technologies commonly used include **HTML**, **CSS**, and **JavaScript**, along with frameworks like **React**, **Angular**, or **Vue**.

### User Interaction

* Frontend handles all user actions like clicks, typing, scrolling, and form submissions.
* It validates user input (for example, checking if an email format is correct before submitting).
* It provides instant feedback to users using loaders, error messages, and success notifications.

### Communication with Backend

* Frontend sends requests to the backend using APIs (mostly via HTTP methods like GET, POST, PUT, DELETE).
* It receives responses from the backend (usually in JSON format) and updates the UI accordingly.
* Tools like **Fetch API** or **Axios** are commonly used for this communication.

---

## Q2. Role of Backend (BE)

The **Backend (BE)** is the server-side part of a web application. It works behind the scenes and handles data, logic, and security.

### Server-Side Processing

* Backend processes requests sent from the frontend.
* It applies business rules, performs calculations, and decides what data should be returned.
* It controls the overall workflow of the application.

### Database Handling

* Backend connects to databases to store, read, update, and delete data.
* It ensures data consistency and integrity.
* Common databases include **MySQL**, **PostgreSQL**, **MongoDB**, and **Firebase**.

### Security and Authentication

* Backend handles user authentication (login, signup, logout).
* It manages authorization (who can access what).
* Sensitive data like passwords are encrypted and never exposed directly to the frontend.

---

## Q3. Business Logic

**Business Logic** refers to the rules and conditions that define how a business operates within an application. It decides *what should happen* when a user performs an action.

Business logic usually lives in the backend (or application layer) and is independent of the UI.

### Real-World Examples

1. **E-commerce Website**

   * Applying discounts only if the cart value is above a certain amount.
   * Allowing checkout only when items are in stock.

2. **Banking Application**

   * Preventing money transfer if the account balance is insufficient.
   * Applying transaction limits per day.

3. **Online Learning Platform**

   * Allowing access to paid courses only after payment is successful.
   * Unlocking the next lesson only after completing the previous one.

---

## Q4. Client–Server Model

The **Client–Server Model** is a communication pattern where tasks are divided between service providers (servers) and service requesters (clients).

### Client

* The client is usually a web browser or mobile app.
* It sends requests and displays responses.
* Example: Chrome browser running a React application.

### Server

* The server is a machine or application that processes requests.
* It contains backend logic and database connections.
* Example: Node.js server with Express.

### Communication Flow

1. Client sends a request (HTTP request).
2. Server processes the request.
3. Server sends back a response.
4. Client updates the UI based on the response.

```
Client  →  Request  →  Server
Client  ←  Response ←  Server
```

---

## Q5. Three-Tier Architecture

**3-Tier Architecture** divides a web application into three separate layers. Each layer has its own responsibility.

### 1. Presentation Layer

* This is the frontend or UI layer.
* It interacts directly with the user.
* Example: React UI in the browser.

### 2. Application (Business) Layer

* This layer contains business logic.
* It processes data received from the presentation layer.
* Example: Node.js/Express APIs.

### 3. Data Layer

* This layer handles data storage.
* It communicates with databases.
* Example: MongoDB or MySQL.

### Why 3-Tier Architecture is Used

* Better separation of concerns.
* Easier maintenance and scalability.
* Each layer can be updated independently.

---

## Q6. JavaScript as a Backend Language

JavaScript is widely used as a backend language, mainly because of **Node.js**.

### Performance

* Node.js uses an event-driven, non-blocking architecture.
* It handles multiple requests efficiently.
* Suitable for real-time applications like chats and dashboards.

### Ecosystem

* JavaScript has a huge ecosystem with **npm** (Node Package Manager).
* Thousands of libraries are available for authentication, databases, logging, and more.

### Popular Backend Frameworks

* **Express.js** – Lightweight and flexible.
* **NestJS** – Structured and scalable framework.
* **Fastify** – High-performance backend framework.

### Additional Advantage

* Same language for frontend and backend.
* Easier learning curve and better team collaboration.

---

*End of answers*
