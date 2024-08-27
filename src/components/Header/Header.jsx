import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
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
          <li className={styles.navItem}>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
