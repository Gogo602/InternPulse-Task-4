import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OrderListPage from "./pages/OrderList/OrderListPage";
import OrderDetailsPage from "./pages/OrderDetails/OrderDetailsPage";

function App() {
  return (
    <Routes>
      
      <Route path="/order-list" element={<OrderListPage />} />
      <Route path="/order-details/:orderId" element={<OrderDetailsPage />} />
      
    </Routes>
  );
}

export default App;