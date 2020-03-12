import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/Home";
import ProjectScreen from "./screens/Projetos";
import AboutUsScreen from "./screens/AboutUs";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={(process.env.PUBLIC_URL = "/Main")}>
          <HomeScreen />
        </Route>
        <Route exact path={(process.env.PUBLIC_URL = "/Projects")}>
          <ProjectScreen />
        </Route>
        <Route exact path={(process.env.PUBLIC_URL = "/About")}>
          <AboutUsScreen />
        </Route>
      </Switch>
    </Router>
  );
}
