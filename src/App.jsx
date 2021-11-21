import React from "react";
import Content from "./components/content/Content";
import Navbars from "./components/navbar/Navbar";
import Service from "./components/service/Service";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbars />
<Switch>
      <Route exact path="/">
        <Content />
      </Route>
      <Route exact path="/service" component={Service}>
        <Service />
      </Route>

      </Switch>

    </>
  );
};

export default App;
