import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';


// import ErrorPage from './error-page';
// import Home from './components/Home';
// import Cpr from './components/cpr';
// import AdultCpr from './components/adultCpr';
// import ChildCpr from './components/childCpr';
// import InfantCpr from './components/infantCpr';
// import Choking from './components/choking';
// import AdultChoking from './components/adultChoking';
// import ChildChoking from './components/childChoking';
// import InfantChoking from './components/infantChoking';
// import Monitor from './components/monitor';
// import Pulse from './components/pulse';
// import Respirations from './components/respirations';
// import SkinCondition from './components/skinCondition';
// import Pearl from './components/pearl';
// import Circulation from './components/circulation';
// import ExtraNotes from './components/extraNotes';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/CPR",
//     element: <Cpr />,
//     errorElement: <ErrorPage />,
//   },
  // {
  //   path: "/adultCpr",
  //   element: <AdultCpr />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/childCpr",
  //   element: <ChildCpr />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/infantCpr",
  //   element: <InfantCpr />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/choking",
  //   element: <Choking />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/adultChoking",
  //   element: <AdultChoking />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/childChoking",
  //   element: <ChildChoking />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/infantChoking",
  //   element: <InfantChoking />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/monitor",
  //   element: <Monitor />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/pulse",
  //   element: <Pulse />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/respirations",
  //   element: <Respirations />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/skinCondition",
  //   element: <SkinCondition />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/pearl",
  //   element: <Pearl />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/circulation",
  //   element: <Circulation />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/extraNotes",
  //   element: <ExtraNotes />,
  //   errorElement: <ErrorPage />,
  // },
// ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
