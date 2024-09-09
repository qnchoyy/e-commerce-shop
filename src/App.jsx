import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Details from "./components/Details/Details";
import { CartProvider } from "./components/context/CartContext";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      <CartProvider>
        <Header onCartToggle={toggleCart} />
        <Cart isOpen={isCartOpen} onClose={toggleCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
