import { Route, Routes } from "react-router-dom";

import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";
import Sidebar from "./components/organisms/sidebar/Sidebar";

import { routes } from "./app/routes";

import "./css/index.css";

const App = () => {
  return (
    <div id='app'>
      <Header></Header>
      <Sidebar></Sidebar>
      <Routes>
        {routes.map(({ element, path }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
