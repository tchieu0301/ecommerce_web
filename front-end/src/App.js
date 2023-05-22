import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/front-end/HomePage/HomePage.jsx";
import LoginPage from "./Components/front-end/LoginPage/LoginPage.jsx";
import Cart from "./Components/front-end/Category/Cart.jsx";
import { ProductProvider } from "./contexts/ProductContext.jsx";
import SignUpPage from "./Components/front-end/SignUpPage/SignUpPage.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import DetailProduct from "./Components/front-end/DetailProduct/DetailProduct.jsx";
function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/LoginPage" element={<LoginPage />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/SignUpPage" element={<SignUpPage />}></Route>
            <Route
              path="/DetailProduct/:id"
              element={<DetailProduct />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
