import { type RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

import ListingDetail from "./pages/ListingDetail";

export const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/listings", element: <Listings /> },
  { path: "/listing/:id", element: <ListingDetail /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/faq", element: <FAQ /> },
  { path: "*", element: <NotFound /> }
];
