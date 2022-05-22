import { Route, Routes } from "react-router-dom";

import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";
import Main from "./components/organisms/main/Main";

import { routes } from "./app/routes";

import "./css/index.css";

const App = () => {
  return (
    <div id='app'>
      <Header></Header>
      <Main>
        <Routes>
          {routes.map(({ element, path }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </Main>
      <Footer></Footer>
    </div>
  );
};

export default App;
