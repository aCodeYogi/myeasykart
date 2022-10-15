import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import ProductListPage from "./ProductListPage";
import ProdDetail from "./ProdDetail";
import Err404 from "./Err404";
import SignUp from "./SignUp";
import Login from "./LogIn";
import ForgotPswd from "./ForgotPswd";
import CartPage from "./CartPage";
import Test from "./Test";
import UserProvider from "./providers/UserProvider";
import AlertProvider from "./providers/AlertProvider";
import AuthRoute from "./AuthRoute";
import CartProvider from "./providers/CartProvider";

function App() {
  return (
    <div>
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <Nav />
            <div className="p-10 bg-gray-100 grow">
              <Routes>
                <Route path="/" element={<ProductListPage />} />
                <Route path="/products/:id/" element={<ProdDetail />} />
                <Route path="*" element={<Err404 />} />
                <Route path="/cart" element={<CartPage />} />
                <Route
                  path="login"
                  element={
                    <AuthRoute>
                      <Login />
                    </AuthRoute>
                  }
                />
                <Route path="sign-Up" element={<SignUp />} />
                <Route path="forgotpswd" element={<ForgotPswd />} />

                <Route path="test" element={<Test />} />
              </Routes>
            </div>
            <Footer />
          </AlertProvider>
        </CartProvider>
      </UserProvider>
    </div>
  );
}
export default App;
