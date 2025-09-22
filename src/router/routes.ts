import AboutPage from "../pages/About/AboutPage";
import HomePage from "../pages/Home/HomePage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

export const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "*", component: NotFoundPage },
];
