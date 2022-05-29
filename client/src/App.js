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
      <Footer></Footer>
    </div>
  );
};

export default App;
