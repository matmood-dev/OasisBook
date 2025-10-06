import { type RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import NotFound from "./pages/NotFound";

export const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/listings", element: <Listings /> },
  { path: "*", element: <NotFound /> }
];
