import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Layout from "../components/layout/Layout";

type RouteItem = {
  path?: string;
  index?: boolean;
  // avoid `any` — use a safe props shape
  component: React.ComponentType<Record<string, unknown>> | React.LazyExoticComponent<React.ComponentType<Record<string, unknown>>>;
};

const AppRouter: React.FC = () => {
  const appRoutes = routes as RouteItem[];

  return (
    <Router>
      <Layout>
        <Routes>
          {appRoutes.map((route, index) => {
            const Component = route.component;
            if (route.index) {
              return <Route key={index} index element={<Component />} />;
            }
            return <Route key={index} path={route.path} element={<Component />} />;
          })}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
