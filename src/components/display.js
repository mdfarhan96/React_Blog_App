import "../App.css";
import Header from "./nav";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./home";
import Category from "./body/category";
import { DataContext } from "./context";
import Article from "./body/article";

const display = () => {
  return (
    <DataContext>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/category/:categories" element={<Category />} />
            <Route
              path="/category/article/:ID/:categories"
              element={<Article />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </DataContext>
  );
};

export default display;
