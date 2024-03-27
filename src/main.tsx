import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import UsersPage from './screens/users.page.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LayoutAdmin from './components/layout/layout.Admin.tsx';
import React from 'react';

// router web
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    children: [
      { index: true, element: <div>basic</div> },
      {
        path: "page1",
        element: <div> page 1</div>,
      },
      {
        path: "page2",
        element: <div>page2</div>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
