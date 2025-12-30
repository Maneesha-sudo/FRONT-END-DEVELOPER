🛍️ ReactShop – Modern E-Commerce Shopping Cart

ReactShop is a modern, responsive e-commerce frontend application inspired by platforms like Amazon and Myntra. It features a clean black & red UI, product grid layout, wishlist, filters, and a separate cart page — all built without useReducer, using React best practices.

🚀 Live Features

🛒 Shopping Cart (Separate Page)

❤️ Wishlist Functionality

🔍 Search Products

💰 Price Filter

↕️ Sort by Price

🧩 Product Grid (3 Columns, Equal Card Sizes)

📱 Fully Responsive Design

🎨 Modern Black & Red Theme

⚡ Fast Vite + React Setup

🖥️ Tech Stack

Frontend: React.js (Hooks, useState)

Styling: CSS3 (Grid + Flexbox)

Routing: React Router DOM

Build Tool: Vite

Language: JavaScript (ES6+)

📁 Project Structure
src/
│── components/
│   ├── Navbar.jsx
│   ├── ProductList.jsx
│   ├── ProductCard.jsx
│   ├── FilterBar.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── Cart.jsx
│   ├── Wishlist.jsx
│
│── data/
│   └── products.js
│
│── App.jsx
│── main.jsx
│── index.css

🏠 Pages Overview
Home Page

Hero section with brand tagline

Product grid (3 cards per row)

Search, filter, and sort options

Add to Cart & Wishlist buttons

Cart Page

Displays selected products

Quantity control

Remove items

Total price calculation

Wishlist Page

Save products for later

Move items to cart

🎨 UI & Design Highlights

CSS Grid for product layout

Flexbox for equal card heights

Fixed image height with object-fit: cover

Buttons aligned using margin-top: auto

Mobile-friendly breakpoints

⚙️ Installation & Setup
# Clone the repository
git clone https://github.com/your-username/ReactShop.git

# Navigate to project folder
cd ReactShop

# Install dependencies
npm install

# Start development server
npm run dev


App will run at:

http://localhost:5173

🧠 Key Learning Outcomes

Managing complex UI state using useState

Implementing cart & wishlist logic

Responsive grid layouts using CSS Grid

Component-based architecture

Clean folder structure

Real-world e-commerce UI patterns

❓ Why No useReducer?

This project intentionally avoids useReducer to demonstrate:

Effective state management using useState

Simpler logic for small–medium scale apps

Clear understanding of when useReducer is truly needed


👩‍💻 Author

Maneesha Mateti
Frontend Developer (React)

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-profile



