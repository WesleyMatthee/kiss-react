import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/root';
import Cpr from './components/cpr';
import AdultCpr from './components/adultCpr'
import ChildCpr from './components/childCpr'
import InfantCpr from './components/infantCpr'
import Choking from './components/choking';
import Footer from './components/footer';
import AdultChoking from './components/adultChoking';
import ChildChoking from './components/childChoking';
import InfantChoking from './components/infantChoking';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cpr",
    element: <Cpr />,
    errorElement: <ErrorPage />
  },
  {
    path: "/adultCpr",
    element: <AdultCpr />,
    errorElement: <ErrorPage />
  },
  {
    path: "/childCpr",
    element: <ChildCpr />,
    errorElement: <ErrorPage />
  },
  {
    path: "/infantCpr",
    element: <InfantCpr />,
    errorElement: <ErrorPage />
  },
  {
    path: "/choking",
    element: <Choking />,
    errorElement: <ErrorPage />
  },
  {
    path: "/adultChoking",
    element: <AdultChoking />,
    errorElement: <ErrorPage />
  },
  {
    path: "/childChoking",
    element: <ChildChoking />,
    errorElement: <ErrorPage />
  },
  {
    path: "/infantChoking",
    element: <InfantChoking />,
    errorElement: <ErrorPage />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
