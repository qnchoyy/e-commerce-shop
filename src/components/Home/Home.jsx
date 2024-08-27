import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.homePage}>
        <h1>Welcome to MyStore</h1>
        <p>Discover the best products at the best prices!</p>
      </div>
    </>
  );
}
