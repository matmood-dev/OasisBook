import { type RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/listings", element: <Listings /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <NotFound /> }
];
