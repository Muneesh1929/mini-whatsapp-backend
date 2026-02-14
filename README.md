# Mini WhatsApp – Backend CRUD Application

A simple backend application built using **Node.js**, **Express.js**, and **MongoDB** to understand core backend concepts such as routing, CRUD operations, database interaction, and error handling.

---

## 🚀 Features

- Create, read, update, and delete chat messages (CRUD)
- MongoDB database with Mongoose ODM
- Express routing and middleware
- Server-side rendering using EJS templates
- Method override for PUT and DELETE requests
- Centralized error handling with custom error class
- Async error handling using wrapper function

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Templating Engine:** EJS  
- **Tools:** Git, GitHub, Postman  

---

## 📂 Project Structure

├── models/
│ └── chat.js
├── views/
│ ├── index.ejs
│ ├── new.ejs
│ └── edit.ejs
├── public/
│ └── style.css
├── ExpressError.js
├── index.js
├── init.js
├── package.json
└── README.md


---

## ⚙️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone git@github.com:Muneesh1929/mini-whatsapp-backend.git

Navigate to the project directory:
cd mini-whatsapp-backend

Install dependencies:
npm install

Make sure MongoDB is running locally

Start the server:
nodemon index.js

Open your browser and visit:
http://localhost:8080/chats
