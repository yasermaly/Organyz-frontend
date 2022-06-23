import React, { useEffect, useState } from "react";
import TaskList from "./pages/TaskList";
import LandingPage from "./pages/LandingPage";
import { Route, Switch } from "react-router-dom";

function App() {
  const [List, setList] = useState(null);

  const URL = "https://organyze-app.herokuapp.com";

  // creates function to call AJAX
  const getList = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setList(data);
  };

  // creates function to create user
  const createList = async (newList) => {
    await fetch(URL + "/TaskList/:_id", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(newList),
    });
    getList();
  };

  // creates function to make list item
  const createItem = async (newItem) => {
    await fetch(URL + "/TaskList/:_id", {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(newItem),
    });
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="container">
      <Switch>
        <Route exact path="/Landing">
          <LandingPage getList={getList} createList={createList} List={List} />
        </Route>

        <Route path="/TaskList/:_id">
          <TaskList getList={getList} createItem={createItem} List={List} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
