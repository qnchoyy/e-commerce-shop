import { Link } from "react-router-dom";

import styles from "./Categories.module.css";

export default function Categories() {
  const categories = ["Men", "Women", "Electronics", "Jewelery"];

  return (
    <div className={styles.categoriesContainer}>
      {categories.map((category) => (
        <Link key={category} to={`/products/${category.toLowerCase()}`}>
          <button className={styles.categoryButton}>{category}</button>
        </Link>
      ))}
    </div>
  );
}
