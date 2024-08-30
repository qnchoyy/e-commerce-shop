import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Details from "./components/Details/Details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
