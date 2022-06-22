import React , {useEffect, useState} from "react";
import TaskList from "./pages/TaskList";
import LandingPage from "./pages/LandingPage";
import { Route, Switch } from "react-router-dom";



function App() {
const [List, setList] = useState(null);

const URL = "https://organyze-app.herokuapp.com";

const getList = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  setList(data);
};

const createList = async (newList) => {
  await fetch(URL + "/TaskList", {
    method: "POST",
    headers: {"Content-Type": "Application/json",},
    body: JSON.stringify(newList),
  });
  getList();
}

 useEffect(() => {getList()}, []);

  return (
    <div className="container">
      <Switch>
        <Route exact path="/Landing">
          <LandingPage getList={getList} createList={createList} List={List} />
        </Route>
        <Route path="/TaskList"
        render={(rp) => (
          <TaskList {...rp} />
        )}
        />
      </Switch>
    </div>
  );
}

export default App;
