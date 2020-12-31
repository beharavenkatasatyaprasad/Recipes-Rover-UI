import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Topnav from "./components/topnav";
import Searchfield from "./components/searchfield";
import CardGroup from "./components/recipecard";
import PublishModal from "./components/publishmodal";
import PublishBtn from "./components/publishtab-btn";
import "./css/common.css";

function App() {
  return (
    <div className="App">
      <Topnav />
      <Searchfield />
      <CardGroup />
      <PublishBtn />
      <PublishModal />
    </div>
  );
}

export default App;
