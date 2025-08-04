# DreamPlace - Hotel Booking Platform

A modern, responsive hotel booking platform built with React, Node.js, and MongoDB.

## ✨ New Features Added

### 🌙 Dark/Light Mode
- **Theme Toggle**: Switch between dark and light modes with a single click
- **Persistent Theme**: Your theme preference is saved and restored on page reload
- **System Preference**: Automatically detects and applies your system's color scheme preference
- **Smooth Transitions**: Beautiful animations when switching between themes

### 🛒 Enhanced Cart Functionality
- **Smart Cart Management**: Add items with quantity controls
- **Real-time Updates**: Cart updates instantly with item count badge
- **Persistent Storage**: Cart items are saved in localStorage
- **Quantity Controls**: Increase/decrease item quantities with +/- buttons
- **Clear Cart**: One-click option to clear entire cart
- **Price Calculation**: Automatic subtotal, tax, and total calculation
- **Toast Notifications**: User-friendly feedback for all cart actions

### 🎨 Modern UI/UX Improvements
- **Responsive Design**: Optimized for all screen sizes
- **Modern Components**: Updated with latest design patterns
- **Smooth Animations**: Hover effects and transitions throughout
- **Better Typography**: Improved readability and hierarchy
- **Enhanced Cards**: Beautiful hotel cards with pricing and ratings

### 📱 Social Media Integration
- **Footer Links**: Complete social media presence with icons
- **Professional Footer**: Organized sections with company info, explore links, terms, and help
- **Social Icons**: Facebook, Twitter, Instagram, LinkedIn, YouTube, and GitHub links

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hotel-booking-main
   ```

2. **Install dependencies**
   ```bash
   # Install client dependencies
   cd client
   npm install
   
   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Environment Setup**
   - Create `.env` files in both client and server directories
   - Add your MongoDB connection string and other required environment variables

4. **Run the application**
   ```bash
   # Start the server (from server directory)
   npm start
   
   # Start the client (from client directory)
   npm run dev
   ```

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Icons** - Beautiful icon library
- **React Toastify** - Toast notifications
- **React Multi Carousel** - Image carousel component

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **Cloudinary** - Image upload and storage
- **Stripe** - Payment processing

## 🎯 Key Features

### User Features
- **Browse Hotels**: View available hotels with images and details
- **Search & Filter**: Find hotels by location, price, and amenities
- **Cart Management**: Add, remove, and manage booking items
- **User Authentication**: Secure login and registration
- **Booking System**: Complete booking flow with payment
- **Order History**: View past bookings and orders
- **Dark/Light Mode**: Personalized theme preference

### Admin Features
- **Dashboard**: Overview of bookings and revenue
- **Hotel Management**: Add, edit, and delete hotels
- **Category Management**: Organize hotels by categories
- **Booking Management**: View and manage all bookings
- **User Management**: Monitor user activities

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6) - Main brand color
- **Dark Mode**: Custom dark palette for better contrast
- **Accent**: Yellow (#fbbf24) - For ratings and highlights

### Typography
- **Font Family**: Inter (system font fallback)
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weight for readability

### Components
- **Cards**: Rounded corners with shadows
- **Buttons**: Consistent styling with hover effects
- **Forms**: Clean, accessible form elements
- **Navigation**: Responsive navbar with theme toggle

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Touch-friendly interface

## 🔧 Customization

### Theme Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... other shades
    900: '#1e3a8a',
  },
  dark: {
    50: '#f8fafc',
    // ... other shades
    900: '#0f172a',
  }
}
```

### Social Media Links
Update the social media links in `Footer.jsx`:
```javascript
const socialLinks = [
  { icon: FaFacebook, href: "https://facebook.com/yourpage", label: "Facebook" },
  // ... other social links
];
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- All contributors and users of this project

---

**DreamPlace** - Making travel dreams come true! ✈️🏨
