# 🛒 React Products Shop

Welcome to **React Products Shop**, a sleek and modern e-commerce interface built with **React** and **TypeScript**. Enjoy a seamless shopping experience with animated product displays, secure login, and a dynamic cart system, all wrapped in a clean, modular, and reusable codebase.

---

## 📋 Project Overview

This application provides a responsive e-commerce platform where users can:

- 🔐 Log in securely with token-based authentication
- 🛍 Browse beautifully animated product cards
- 🛒 Add items to a cart with real-time feedback
- 🎨 Interact with a polished UI styled with SCSS and powered by Framer Motion

Built with a **component-based architecture**, this project emphasizes scalability, maintainability, and a delightful user experience.

---

## ✨ Key Features

- 🔒 **Secure Authentication**: Token-based login system for user access
- 🎬 **Animated UI**: Smooth product card animations using Framer Motion
- 🛒 **Cart Functionality**: Add products to cart via API with instant feedback
- 🔔 **Toast Notifications**: User-friendly alerts powered by React Hot Toast
- 🧩 **Modular Design**: Reusable components for easy maintenance
- 📝 **Type Safety**: Full TypeScript support for robust development
- 💅 **Custom Styling**: Elegant SCSS with support for dark mode

---

## 🛠 Tech Stack

| **Technology**      | **Purpose**                  |
| ------------------- | ---------------------------- |
| ⚛️ React            | Core UI framework            |
| 📘 TypeScript       | Type-safe JavaScript         |
| 🚦 React Router DOM | Client-side routing          |
| 🎥 Framer Motion    | Animations for UI elements   |
| 🔥 React Hot Toast  | Notification system          |
| 🎨 SCSS             | Modular and reusable styling |
| 🖼 React Icons       | Lightweight icon library     |

---

## 📂 Project Structure

A clean and organized folder structure ensures scalability and ease of development:

```bash
src/
├── assets/                 # Static assets (images, icons)
├── components/             # Reusable UI components
│   ├── ProductList.tsx     # Product list display
│   ├── ProductsHeader.tsx  # Header for product page
│   └── UserForm.tsx        # Login form component
├── data/                   # Static data
│   └── products.ts         # Mock product data
├── handlers/               # API request handlers
│   ├── authHandlers.ts     # Authentication logic
│   └── productHandlers.ts  # Product-related logic
├── pages/                  # Page components for routing
│   ├── Login.tsx           # Login page
│   └── Products.tsx        # Products page
├── services/               # API service logic
│   ├── authService.ts      # Authentication API calls
│   └── cartService.ts      # Cart API calls
├── styles/                 # SCSS stylesheets
│   ├── login.scss          # Login page styles
│   ├── products.scss       # Product page styles
│   └── darkmode.scss       # Dark mode theme
├── types/                  # TypeScript interfaces
│   ├── auth.ts             # Auth-related types
│   └── product.ts          # Product-related types
├── App.tsx                 # Root application component
├── main.tsx                # React entry point
└── index.html              # HTML template (Vite)
```
