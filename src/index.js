import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createBrowserRouter,RouterProvider,Router}from "react-router-dom"
import Login from './components/login';
import Home from './components/home';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home/>,
      },
    ],
  },
]);
root.render(
<RouterProvider router={router}/>
);


