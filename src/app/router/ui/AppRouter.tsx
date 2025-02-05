import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig";
import { Loader } from "shared/ui";

const AppRouter = () => (
  <Suspense>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={<main>{element}</main>}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
