import { useEffect, useState } from "react";

import styles from "./Products.module.css";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className={styles.productsList}>
        <ul className={styles.products}>
          {products.map((product) => (
            <li key={product.id} className={styles.productCard}>
              <img
                className={styles.productImage}
                src={product.image}
                alt={product.title}
                width="100"
              />
              <button
                className={`${styles.detailsButton} ${styles.eyeIcon}`}
                onClick={() => navigate(`/details/${product.id}`)}
              >
                <i className="fa fa-eye"></i>
              </button>
              <button className={styles.addToCartButton}>
                <i className="fa fa-plus"></i>
              </button>
              <h2 className={styles.productTitle}>{product.title}</h2>
              {/* <p className={styles.productDescription}>{product.description}</p> */}
              <p className={styles.productPrice}>Price: ${product.price}</p>
              <p className={styles.productRating}>
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
              {/* <button className={styles.addToCartButton}>Add to Cart</button> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
