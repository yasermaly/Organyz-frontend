import React from "react";
import PageTitle from "./components/PageTitle";
import style from './styles/modules/app.scss';
import AppHeader from "./components/AppHeader";



function App() {
  return (
    <div className="container">
      <PageTitle>Organyze</PageTitle>
      <div className={style.app__wrapper}>
        <AppHeader></AppHeader>
      </div>
    </div>
  );
}

export default App;
