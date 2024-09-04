import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import styles from "./Cart.module.css";

export default function Cart({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleDecreaseQuantity = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  const handleIncreaseQuantity = (id, currentQuantity) => {
    updateQuantity(id, currentQuantity + 1);
  };

  return (
    <div className={`${styles.cart} ${isOpen ? styles.open : ""}`}>
      <div className={styles.cartHeader}>
        <h2>Your Cart</h2>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
      </div>
      <div className={styles.cartContent}>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul className={styles.cartItemsList}>
              {cartItems.map((item) => (
                <li key={item.id} className={styles.cartItem}>
                  <img src={item.image} alt={item.title} width="50" />
                  <div className={styles.itemDetails}>
                    <span>{item.title}</span>
                    <div className={styles.quantityControls}>
                      <button
                        className={styles.quantityButton}
                        onClick={() =>
                          handleDecreaseQuantity(item.id, item.quantity)
                        }
                      >
                        -
                      </button>
                      <span className={styles.quantityText}>
                        {item.quantity}
                      </span>
                      <button
                        className={styles.quantityButton}
                        onClick={() =>
                          handleIncreaseQuantity(item.id, item.quantity)
                        }
                      >
                        +
                      </button>
                    </div>
                    <span>Price: ${item.price * item.quantity}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className={styles.removeButton}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className={styles.totalAmount}>
              <strong>Total Amount: ${totalAmount.toFixed(2)}</strong>
            </div>
            <div className={styles.cartActions}>
              <button onClick={clearCart} className={styles.clearCartButton}>
                Clear Cart
              </button>
              <button
                onClick={() => {
                  onClose();
                  navigate("/checkout");
                }}
                className={styles.checkoutButton}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
