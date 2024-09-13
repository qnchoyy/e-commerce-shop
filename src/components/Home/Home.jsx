import { useState, useEffect, useContext } from "react";

import styles from "./Home.module.css";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=5"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.homepage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Welcome to MyStore</h1>
          <p>Discover the best deals on your favorite products.</p>
          <button className={styles.shopNowBtn}>
            <Link to="/products">Shop Now</Link>
          </button>
        </div>
      </section>

      <section className={styles.featuredProducts}>
        <h2>Most purchased products</h2>
        <div className={styles.productList}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
              <button
                className={`${styles.detailsButton} ${styles.eyeIcon}`}
                onClick={() => navigate(`/details/${product.id}`)}
              >
                <i className="fa fa-eye"></i>
              </button>
              <button
                className={styles.addToCartButton}
                onClick={() => addToCart(product)}
              >
                <i className="fa fa-plus"></i>
              </button>
              <h3>{product.title}</h3>
              <p>{product.category}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
