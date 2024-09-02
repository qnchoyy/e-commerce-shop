import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import styles from "./Cart.module.css";

export default function Cart({ isOpen, onClose }) {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className={`${styles.cart} ${isOpen ? styles.open : ""}`}>
      <div className={styles.cartHeader}>
        <h2>Your Cart</h2>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
      </div>
      <div className={styles.cartContent}>
        <p>Your cart is empty</p>
      </div>
    </div>
  );
}
