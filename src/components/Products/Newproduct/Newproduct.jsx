import { Routes, Route, Navigate } from "react-router-dom";
import ProductInfo from "./ProductInfo";
import Media from "./Media";
import Social from "./Social";
import Pricing from "./Pricing";

function NewProduct() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="product-info" replace />} />
      <Route path="product-info" element={<ProductInfo />} />
      <Route path="media" element={<Media />} />
      <Route path="social" element={<Social />} />
      <Route path="pricing" element={<Pricing />} />
    </Routes>
  );
}

export default NewProduct;