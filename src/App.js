import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { LeftBlock } from "./components/LeftBlock/LeftBlock";
import { Menu } from "./components/Menu/Menu";
import { Login } from './components/pages/Auth/Login/Login.jsx';
import { RightBlock } from "./components/RightBlock/RightBlock";

export const AppContext = React.createContext();

function App() {
  const [login, setLogin] = React.useState(false);

  return (
    <div className="appWrapper">
      <div className="content">
        <AppContext.Provider value={{setLogin, login}}>
          <LeftBlock />
          <RightBlock />
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
        </AppContext.Provider>
      </div>
     <Menu />
    </div>
  );
}

export default App;
