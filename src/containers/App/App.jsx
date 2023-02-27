import React from "react";
import "./App.css";
import { BrowserRouter} from "react-router-dom";
import Routers from "../../Routers";

const App = () => {
  return (
    <div className="App page-container">
      <div className="content-wrap">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
