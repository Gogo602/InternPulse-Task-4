import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import Login from './frontPage/Login'
import SignUp from './frontPage/SignUp'
import Dashboard from './components/Dashboard'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NewProduct from './Products/Newproduct/Newproduct';
import EditProduct from './Products/Editproduct/Editproduct';


const App = () => {
    const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;