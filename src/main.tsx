import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import PageNotFound from "./core/page-not-found/page-not-found";
import "./index.css";
import Missions from "./mission/adapters/primaries/missions/missions";
import Pokemons from "./pokemon/adapters/primaries/pokemons/pokemons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "pokemons",
        element: <Pokemons />,
      },
      {
        path: "missions",
        element: <Missions />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
