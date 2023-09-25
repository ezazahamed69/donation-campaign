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

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    // element: <App></App>,
    element: <Root></Root>,
    errorElement: <Error></Error>,

    children :[
      {
        path: "/",
        element: <main></main>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
