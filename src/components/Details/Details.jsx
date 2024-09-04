import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./Details.module.css";
import { CartContext } from "../context/CartContext";

export default function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.productDetailsCard}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
        <h2 className={styles.productTitle}>{product.title}</h2>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>Price: ${product.price}</p>
        <div className={styles.buttons}>
          <button
            onClick={() => addToCart(product)}
            className={styles.addToCartButton}
          >
            Add to Cart
          </button>
          <button className={styles.goBackButton} onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
