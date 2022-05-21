import { Route, Routes } from "react-router-dom";
import { routes } from "./app/routes";

const App = () => {
  return (
    <div>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
