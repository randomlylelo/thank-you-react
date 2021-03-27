import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SecondPage from "./SecondPage";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/thankyou" component={SecondPage}></Route>
      </Switch>
    </div>
  );
}
