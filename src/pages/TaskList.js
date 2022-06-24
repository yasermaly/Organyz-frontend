import React from 'react'
import AppHeader from '../components/AppHeader';
import PageTitle from '../components/PageTitle';
import AppContent from '../components/AppContent';
import style from '../styles/modules/app.module.scss';
import { useParams } from "react-router-dom";


function TaskList({getList, createItem, List}) {

let {id} = useParams();

  return (
    <div>
      <PageTitle />
      <div className={style.app__wrapper}>
        <AppHeader getList={getList} createItem={createItem} List={List} id={id} />
        <AppContent List={List} getList={getList} id={id}/>
      </div>
    </div>
  );
}

export default TaskList