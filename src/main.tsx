import ReactDOM from 'react-dom/client'
import TrackingComponent from './TrackingComponents/Tracking_Nutrion.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React from 'react';
import CarouselTracking from './TrackingComponents/CaroulselTrack.tsx';

import App from './App';
import Introduction from './Introduction/Introduction';
import Support from './SuportComponent/Support';
import AchiveComponent from './AchievementComponent/achiveComponent';
import Information from './InformationComponent/Information.tsx';
import AdviseComponent from './AdviseComponent/AdviseComponent.tsx';
import PageTracking from './TrackingComponents/PageTracking.tsx';


// router web
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, element: <Introduction />
      },
      {
        path: "Follow",
        element: <PageTracking/>,
      },
      {
        path: "Achive",
        element: <AchiveComponent />,
      },
      {
        path: "Advise",
        element: <AdviseComponent />,
      },
      {
        path: "Information",
        element: <Information />,
      },
      {
        path: "Support",
        element: <Support />,
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
)
