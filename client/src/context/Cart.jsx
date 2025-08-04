import { useState, useContext, createContext, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const existingCartItem = localStorage.getItem("cart");
    if (existingCartItem) {
      try {
        setCart(JSON.parse(existingCartItem));
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        localStorage.removeItem("cart");
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem._id === item._id);
      
      if (existingItem) {
        // Update quantity if item already exists
        const updatedCart = prevCart.map(cartItem =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
        toast.success("Item quantity updated in cart!");
        return updatedCart;
      } else {
        // Add new item with quantity 1
        toast.success("Item added to cart successfully!");
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter(item => item._id !== itemId);
      toast.success("Item removed from cart!");
      return updatedCart;
    });
  };

  // Update item quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item._id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
    toast.success("Cart cleared successfully!");
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = item.quantity || 1;
      return total + (price * quantity);
    }, 0);
  };

  // Calculate total items
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  const cartValue = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  };

  return (
    <CartContext.Provider value={cartValue}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { useCart, CartProvider };
