import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NewProduct from './Products/Newproduct/Newproduct';
import EditProduct from './Products/Editproduct/Editproduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/newproduct" replace />} />
        <Route path="/newproduct/*" element={<NewProduct />} />
        <Route path="/editproduct/*" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;