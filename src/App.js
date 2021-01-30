import React from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <div>
      <Header />;
      <Switch>
        <Route path="/Signup">
          <Signup />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
