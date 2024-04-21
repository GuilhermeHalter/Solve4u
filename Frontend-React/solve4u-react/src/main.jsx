import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Home from './screens/HomeScreen.jsx'


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path:"/",
        element: <Home />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)