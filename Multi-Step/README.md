Multi-Step Registration Form

A modern, responsive multi-step registration form built with React.js, Tailwind CSS, and Axios. The project demonstrates centralized state management, form validations, progress tracking, and integration with APIs. Perfect for portfolios and GitHub to showcase front-end skills.

Features

Multi-Step Form

Personal Details → Account Details → Review & Submit

Smooth transitions between steps

Progress bar highlighting current step

Form Validation

Required fields

Password & Confirm Password matching

Live error feedback

State Management

Centralized form state using useReducer

Easy to scale for more fields or steps

UX/UI

Colorful gradient headings for main title and step titles

Gradient form cards with hover scale effects

Gradient buttons with hover and transition animations

Responsive design for mobile and desktop

API Integration

Axios POST request to submit form data

Loading state on submit

Error handling for failed requests

Tech Stack

Frontend: React.js (Functional Components, Hooks)

Styling: Tailwind CSS (gradients, hover, transitions)

API: Axios for HTTP requests

Screenshots

(Add screenshots here if possible)

Installation

Clone the repository:

git clone <your-repo-url>
cd multi-step-form


Install dependencies:

npm install


Start the development server:

npm start


Open http://localhost:3000
 in your browser.

Usage

Fill out Personal Details (First Name, Last Name, Email).

Proceed to Account Details (Password, Confirm Password).

Review & Submit: Check your details and click Submit.

Data is sent via Axios POST request to the configured API.

Project Structure
multi-step-form/
│
├─ src/
│  ├─ components/
│  │   ├─ PersonalDetails.jsx
│  │   ├─ AccountDetails.jsx
│  │   ├─ ReviewSubmit.jsx
│  │   └─ ProgressBar.jsx
│  ├─ reducer.js
│  ├─ App.jsx
│  ├─ index.js
│  └─ index.css
├─ package.json
└─ tailwind.config.js

How Axios Works Here

Submits form data on Review & Submit step.

Uses async/await with try/catch for error handling.

Displays loading state while request is in progress.

Shows alert or error message based on API response.

const response = await axios.post("https://jsonplaceholder.typicode.com/posts", state);

Customization

Update API endpoint in ReviewSubmit.jsx to connect to your backend.

Change gradient colors in Tailwind classes to fit your branding.

Add more steps or fields by updating reducer.js and form components.

Key Skills Demonstrated

React Hooks (useState, useReducer)

Form handling & validation

State management across multi-step forms

Tailwind CSS gradients, hover effects, and responsive design

Axios HTTP requests and error handling

License

This project is open source and free to use.
