import { useContext, useEffect, useState } from "react";
import styles from "./Products.module.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Spinner from "../Spinner/Spinner";

const categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const fetchProducts = async (category) => {
    try {
      setIsLoading(true);
      let url = "https://fakestoreapi.com/products";
      if (category !== "all") {
        url = `https://fakestoreapi.com/products/category/${category}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <div className={styles.categoryButtons}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? styles.activeButton : ""}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.productsList}>
        {isLoading ? (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        ) : (
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
                <button
                  className={styles.addToCartButton}
                  onClick={() => addToCart(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>
                <h2 className={styles.productTitle}>{product.title}</h2>
                <p className={styles.productPrice}>Price: ${product.price}</p>
                <p className={styles.productRating}>
                  Rating: {product.rating.rate} ({product.rating.count} reviews)
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
