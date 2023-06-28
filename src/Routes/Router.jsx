import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Projects from '../Pages/Projects/Projects';

  export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
      {
        path: "/",
        element:<Home></Home>
      },

      {
        path: "/Projects",
        element:<Projects></Projects>
      },
      ]
    },
  ]);
  