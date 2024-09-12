import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Welcome to MyStore</h1>
          <p>Discover the best deals on your favorite products.</p>
          <button className={styles.shopNowBtn}>Shop Now</button>
        </div>
      </section>

      <section className={styles.featuredProducts}>
        <h2>Featured Products</h2>
        <div className={styles.productList}>
          <div className={styles.productCard}>Product 1</div>
          <div className={styles.productCard}>Product 2</div>
          <div className={styles.productCard}>Product 3</div>
        </div>
      </section>
    </div>
  );
}
