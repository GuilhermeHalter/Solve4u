import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Home from './screens/HomeScreen.jsx'
import SignIn from './screens/SignInScreen.jsx'
import SignUp from './screens/SignUpScreen.jsx'


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
      {
        path:"/signin",
        element: <SignIn />
      },
      {
        path:"/signup",
        element: <SignUp />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)