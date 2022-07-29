import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import "./index.css";
import Layout from "./Layout";
import Header from "./Header";
import Navbar from "./Navbar";
import { StateContext } from "./context/StateContext";
import Footer from "./Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContext>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Layout>
          <Routes>
            <Route index element={<App />} />
            <Route path="/:id" element={<App />} />
          </Routes>
        </Layout>
        <Footer />
      </BrowserRouter>
    </StateContext>
  </React.StrictMode>
);
