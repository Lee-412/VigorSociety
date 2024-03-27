import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React from 'react';
import App from './App';
import Introduction from './Introduction/Introduction';
import Support from './SuportComponent/Support';
import AchiveComponent from './AchievementComponent/achiveComponent';

// router web
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Introduction /> },
      {
        path: "Follow",
        element: <Support />,
      },
      {
        path: "Achive",
        element: <AchiveComponent />,
      },
      {
        path: "Advise",
        element: <AchiveComponent />,
      },
      {
        path: "Information",
        element: <AchiveComponent />,
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
