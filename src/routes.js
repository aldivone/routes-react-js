import React from "react";
import { Route, Switch } from "react-router-dom";
import Category from "./Category";
import Home from "./Home";
import Products from "./Products";

function Routes() {
  return (
    <Switch>
      {/* Route components are rendered if the path prop matches the current URL */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/category">
        <Category />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </Switch>
  );
}

export default Routes;
