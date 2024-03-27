import ReactDOM from 'react-dom/client'
import TrackingComponent from './TrackingComponents/Tracking_Nutrion.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React from 'react';

// router web
const router = createBrowserRouter([
  {
    path: "/",
    element: <TrackingComponent />,
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
