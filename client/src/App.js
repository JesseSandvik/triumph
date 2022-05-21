import { Route, Routes } from "react-router-dom";

import Registration from "./components/pages/registration/Registration";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;
