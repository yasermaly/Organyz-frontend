import React from 'react'
import AppHeader from '../components/AppHeader';
import PageTitle from '../components/PageTitle';
import AppContent from '../components/AppContent';
import style from '../styles/modules/app.module.scss';


function TaskList(props) {
  return (
    <div>
      <PageTitle />
      <div className={style.app__wrapper}>
        <AppHeader getList={props.getList} createItem={props.createItem} List={props.List}/>
        <AppContent></AppContent>
      </div>
    </div>
  );
}

export default TaskList