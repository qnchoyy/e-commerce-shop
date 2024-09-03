import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Header({ onCartToggle }) {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Link to="/">MyStore</Link>
      </div>
      <nav className={styles.headerNav}>
        <ul className={styles.headerList}>
          <li className={styles.navItem}>
            <Link to="/products">Products</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <button onClick={onCartToggle} className={styles.cartButton}>
              <i className="fa fa-shopping-cart"></i>
              {totalItems > 0 && (
                <span className={styles.cartBadge}>{totalItems}</span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
