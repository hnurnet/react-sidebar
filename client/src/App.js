import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Comment from "./pages/Comment.jsx";
import Analytics from "./pages/Analytics.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";


const App = () => {
  return (
    <Router>
      <Sidebar>
      <Routes>
      <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
      </Routes>
      </Sidebar>
    </Router>
    
  );
};

export default App;
