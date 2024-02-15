import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Dashboard';
import Heroes from './Heroes';
import Search from './Search';
import NewHero from './NewHero';
import NewAddress from './NewAddress';
import HeroDetails from './HeroDetails';

const title = "React tour of heroes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App title={title}/>,
  },{
    path: "/dashboard",
    element: <Dashboard title={title}/>
  },{
    path: "/heroes",
    element: <Heroes title={title}/>
  },{
    path: "search",
    element: <Search title={title}/>
  },{
    path: "/newHero",
    element: <NewHero title={title}/>
  },{
    path: "/newAddress",
    element: <NewAddress title={title}/>
  },{
    path: "/heroDetails/:id",
    element: <HeroDetails title={title}/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
