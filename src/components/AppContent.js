import {React } from 'react';
import style from '../styles/modules/todoItem.module.scss';

function AppContent({getList, id, List}) {
const Loaded = () => {
  console.log(List);
  console.log(id)
const newUser = List.find(obj => {
  return obj._id === id;
})
console.log(newUser);

let newTasks = newUser.task;
    return (
      <div>
        <ul>
      {newTasks.map((item, index) => {
        return (
      <li key={item._id} className={style.item}>
          <h2>{item.title}</h2>
      </li>);
       })}
    </ul>
    </div>
  )
  }
  const Loading = () => {
    return <h1>Loading...</h1>
  }

  return (
    <div>
        {List ? Loaded() : Loading() }
    </div>
  )
}

export default AppContent