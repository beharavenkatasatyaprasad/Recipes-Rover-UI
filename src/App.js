import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Topnav from "./components/topnav";
import Searchfield from "./components/searchfield";
import CardGroup from "./components/recipecard";
import Recipedeleted from "./components/deleted";
import Editrecipe from "./components/editrecipe";
import Publish from "./components/publishmodal";
import PublishBtn from "./components/publishtab-btn";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import Recipe from "./components/recipe";
import "./css/common.css";

function App() {
  return (
    <BrowserRouter>
      <Topnav />
      <Route exact path="/">
        <Searchfield />
        <CardGroup />
        <PublishBtn />
        <ScrollUpButton />
      </Route>
      <Route path="/recipe/:id">
        <Recipe />
      </Route>
      <Route path="/deleterecipe/:id">
        <Recipedeleted />
      </Route>
      <Route path="/publish">
        <Publish />
      </Route>
      <Route path="/editrecipe/:id">
        <Editrecipe />
      </Route>
    </BrowserRouter>
  );
}

export default App;
