# 🍕 Food Delivery System

A full-stack food delivery application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application provides a complete solution for online food ordering with user authentication, restaurant management, cart functionality, and order tracking.

## ✨ Features

### User Features
- **User Authentication**: Sign up, login, and logout functionality
- **Food Menu**: Browse food items with categories, descriptions, and prices
- **Shopping Cart**: Add/remove items, update quantities
- **Order Management**: Place orders, view order history
- **User Profile**: Manage personal information and addresses
- **Payment Integration**: Secure payment processing
- **Order Tracking**: Real-time order status updates

### Admin Features
- **Menu Management**: Manage food items, categories, and pricing
- **Order Management**: View and update order statuses
- **Dashboard**: Analytics and statistics overview

## 🛠 Tech Stack

### Frontend
- **React.js** - User interface library
- **React Router** - Client-side routing
- **Redux/Context API** - State management
- **Axios** - HTTP client for API calls
- **CSS3/SCSS** - Styling

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt.js** - Password hashing
- **Multer** - File upload handling
- **Cors** - Cross-origin resource sharing

### Additional Tools
- **Stripe** - Payment processing (if applicable)


## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm
- MongoDB (local or cloud)

### Clone the Repository
```bash
git clone https://github.com/h3YaSh07Gv1/food-delivery-system.git
cd food-delivery-system
```

### Backend Setup
```bash
# Navigate to server directory
cd backend

# Install dependencies
npm install

# Create .env file and add environment variables
cp .env.example .env

# Start the server
npm run server
# or for development
npm run dev
```

### Frontend Setup
```bash
# Navigate to client directory
cd frontend

# Install dependencies
npm install

# Start the React app
npm run dev
```

### Admin Panel Setup (if applicable)
```bash
# Navigate to admin directory
cd admin

# Install dependencies
npm install

# Start the admin panel
npm run dev
```

---

⭐ **If you found this project helpful, please give it a star!** ⭐