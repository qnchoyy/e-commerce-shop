import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    try {
      if (!username || !password) {
        alert("Please enter both username and password");
        return;
      }

      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP erorr! ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.loginTitle}>
          <span>Login</span>
        </div>
        <div className={styles.inputWrapper}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className={styles.inputField}
            required
            placeholder=""
          />
          <label className={styles.label}>Username</label>
          <i className="fa-regular fa-user icon" />
        </div>

        <div className={styles.inputWrapper}>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className={styles.inputField}
            required
            placeholder=""
          />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <i className="fa-solid fa-lock icon" />
        </div>
        <div className={styles.inputWrapper}>
          <button onClick={loginHandler} className={styles.loginBtn}>
            Login
          </button>
        </div>

        <div className={styles.singUp}>
          <span>
            Don't have an account? <Link to="/register">Sing up</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
