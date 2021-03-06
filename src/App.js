import React, { useEffect, useState } from "react";
import TaskList from "./pages/TaskList";
import LandingPage from "./pages/LandingPage";
import Welcome from "./pages/Welcome";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  const [List, setList] = useState(null);

  // const URL = "http://localhost:4000";

  const URL = "https://organyze-app.herokuapp.com"


  // creates function to call AJAX
  const getList = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setList(data);
  };

  // creates function to create user
  const createList = async (newList, id) => {
    await fetch(URL + "/TaskList/" + id, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(newList),
    });
    getList();
  };

  // creates function to make list item
  const createItem = async (newItem, id) => {
    await fetch(URL + "/TaskList/" + id, {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(newItem),
    });
  }

  //Find one and Update item
  const updateItem = async (updatedItem, id) => {
    await fetch(URL + "/TaskList/" + id + "/edit", {
      method: "PUT",
      headers:  { "Content-Type": "Application/json" },
      body: JSON.stringify(updatedItem),
    })
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Redirect to="/Landing"/>
        </Route>
        <Route path="/Landing">
          <LandingPage getList={getList} createList={createList} List={List} />
        </Route>
        <Route path="/Welcome">
          <Welcome  List={List}/>
        </Route>
        <Route path="/TaskList/:id">
          <TaskList getList={getList} createItem={createItem} updateItem={updateItem} List={List} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
