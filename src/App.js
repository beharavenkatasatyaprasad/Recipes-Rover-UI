import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter, Route } from 'react-router-dom';
import Topnav from "./components/topnav";
import Searchfield from "./components/searchfield";
import CardGroup from "./components/recipecard";
import Publish from "./components/publishmodal";
import PublishBtn from "./components/publishtab-btn";
import "./css/common.css";
import Recipe from "./components/recipe";

function App() {
  return (
      <BrowserRouter>
        <Topnav />
        <Route exact path="/">
          <Searchfield />
          <CardGroup />
          <PublishBtn />
        </Route>
        <Route path="/recipe/:id" >
          <Recipe />
        </Route>
        <Route path="/publish">
          <Publish />
        </Route>
      </BrowserRouter>
  );
}

export default App;
