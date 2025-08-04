import React from "react";
import { FaTrashAlt, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../context/UserContext";
import { useCart } from "../context/Cart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CartPage = () => {
  const [auth] = useAuth();
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckIn = () => {
    if (!auth?.token) {
      toast.error("Authentication required to proceed!");
      return navigate("/login");
    }

    if (!cart.length) {
      toast.error("Your cart is empty.");
      return;
    }

    // Pass cart details to the payment page
    navigate("/payment", {
      state: {
        totalPrice: getTotalPrice(),
        products: cart.map((product) => ({
          title: product.title,
          postId: product._id,
          price: product.price,
          quantity: product.quantity || 1,
        })),
      },
    });
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const formatPrice = (price) => {
    return parseFloat(price).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Product Details */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Your Cart</h2>
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors duration-200 text-sm"
                  >
                    Clear Cart
                  </button>
                )}
              </div>
              
              {cart.length > 0 ? (
                <div className="space-y-4">
                  {cart.map((product) => (
                    <div
                      key={product._id}
                      className="flex items-center gap-4 p-4 border border-gray-200 dark:border-slate-700 rounded-lg hover:shadow-md transition-shadow duration-200"
                    >
                      {/* Product Image */}
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      
                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                          {product.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {product.description?.substring(0, 80)}...
                        </p>
                        <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
                          {formatPrice(product.price)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(product._id, (product.quantity || 1) - 1)}
                          className="p-1 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200"
                        >
                          <FaMinus className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                        </button>
                        <span className="w-8 text-center text-gray-800 dark:text-white font-medium">
                          {product.quantity || 1}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(product._id, (product.quantity || 1) + 1)}
                          className="p-1 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200"
                        >
                          <FaPlus className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(product._id)}
                        className="p-2 text-red-500 hover:text-red-700 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200"
                      >
                        <FaTrashAlt size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FaShoppingCart className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">Your cart is empty</p>
                  <button
                    onClick={() => navigate("/")}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Price Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Order Summary</h2>
              {cart.length > 0 ? (
                <>
                  <div className="space-y-3 mb-6">
                    {cart.map((product) => (
                      <div
                        key={product._id}
                        className="flex justify-between items-center text-gray-700 dark:text-gray-300"
                      >
                        <div className="flex-1">
                          <span className="font-medium">{product.title}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 block">
                            Qty: {product.quantity || 1}
                          </span>
                        </div>
                        <span className="font-semibold text-primary-600 dark:text-primary-400">
                          {formatPrice(product.price * (product.quantity || 1))}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <hr className="border-gray-300 dark:border-slate-600 mb-6" />
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                      <span>Subtotal:</span>
                      <span>{formatPrice(getTotalPrice())}</span>
                    </div>
                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                      <span>Tax:</span>
                      <span>{formatPrice(getTotalPrice() * 0.1)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-gray-800 dark:text-white">
                      <span>Total:</span>
                      <span className="text-primary-600 dark:text-primary-400">
                        {formatPrice(getTotalPrice() * 1.1)}
                      </span>
                    </div>
                  </div>

                  {auth?.token ? (
                    <button
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
                      onClick={handleCheckIn}
                    >
                      Proceed to Checkout
                    </button>
                  ) : (
                    <button
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
                      onClick={() => navigate("/login")}
                    >
                      Please Login
                    </button>
                  )}
                </>
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center">No items to display.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
