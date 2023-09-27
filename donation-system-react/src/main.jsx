import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App';
import Root from './components/Root/Root';
import Error from './components/ErrorPage/Error';
import DonationDetails from './components/Donation/DonationDetails';
import Statistics from './components/Statistics/Statistics';
import Home from './components/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    // element: <App></App>,
    element: <Root></Root>,
    errorElement: <Error></Error>,

    children :[
      {
        path: "/Home",
        element: <Home></Home>
      },
      {
        path: "/Donation/:id",
        element: <DonationDetails />,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>
        
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
