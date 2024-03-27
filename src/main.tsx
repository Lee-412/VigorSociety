import ReactDOM from 'react-dom/client'
import TrackingComponent from './TrackingComponents/Tracking_Nutrion.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React from 'react';
import CarouselTracking from './TrackingComponents/CaroulselTrack.tsx';

// router web
const router = createBrowserRouter([
  {
    path: "/",
    element: <CarouselTracking name={"home"} />,
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
