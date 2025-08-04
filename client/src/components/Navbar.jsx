import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/logo (2).png";
import { useAuth } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/Cart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const { getTotalItems } = useCart();
  const navigate = useNavigate();
  
  // Calculate cart items count
  const cartItemCount = getTotalItems();

  // Redirect logic
  const redirectDashboard = (e) => {
    e.stopPropagation();
    if (auth?.user?.role === "admin") {
      navigate("/admin/details");
    } else {
      navigate("/user");
    }
  };

  // Handle dropdown toggle
  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Close dropdown when mouse leaves
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Handle logout logic
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    navigate("/");
  };

  return (
    <nav className="bg-white dark:bg-slate-800 shadow-lg border-b border-gray-200 dark:border-slate-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo and Name */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">DreamPlace</span>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#discover" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium">
              Discover
            </a>
            <a href="#activities" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium">
              Activities
            </a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium">
              Contact
            </a>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4 relative">
            {/* Theme Toggle */}
            <button
              onClick={() => {
                console.log('Theme toggle clicked, current theme:', isDarkMode);
                toggleTheme();
              }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <FaSun className="w-5 h-5 text-yellow-500" />
              ) : (
                <FaMoon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Cart with badge */}
            <div className="relative">
              <button
                onClick={() => navigate("/cart")}
                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200 relative"
              >
                <FaShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>

            {/* User Profile */}
            <button
              onClick={handleDropdownToggle}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200"
            >
              <FaUser className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg z-50 animate-slide-up"
                onMouseLeave={closeDropdown}
              >
                <ul className="py-2">
                                      <li
                      className="px-4 py-2 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer transition-colors duration-200"
                      onClick={redirectDashboard}
                    >
                    Your Profile
                  </li>
                  {auth?.user ? (
                    <li
                      className="px-4 py-2 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer transition-colors duration-200"
                      onClick={handleLogout}
                    >
                      Sign Out
                    </li>
                  ) : (
                    <li
                      onClick={() => navigate("/login")}
                      className="px-4 py-2 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer transition-colors duration-200"
                    >
                      Sign In
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
