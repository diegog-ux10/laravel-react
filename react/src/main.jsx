import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App.jsx";
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import {ContextProvider} from "./contexts/ContextProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
