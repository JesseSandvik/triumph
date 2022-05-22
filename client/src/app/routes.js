import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";

export const routes = [
  {
    name: "home",
    path: "/",
    element: <Login />,
  },
  {
    name: "login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "register",
    path: "/register",
    element: <Registration />,
  },
];
