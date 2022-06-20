import React from "react";
import TaskList from "./pages/TaskList";
import LandingPage from "./pages/LandingPage";
import { Route, Switch } from "react-router-dom";



function App(props) {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/TaskList">
          <TaskList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
