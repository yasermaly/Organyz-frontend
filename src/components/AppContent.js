import React, { useState } from 'react';
// import style from '../styles/modules/todoItem.module.scss';
import style from '../styles/modules/contentTable.module.scss'
import Button from './Button';
import TodoItem from './TodoItem';


function AppContent({getList, id, List, modalOpen, setModalOpen}) {

const Loaded = () => {
  console.log(List);
  console.log(id)
 const [modalOpen, setModalOpen] = useState(false); // creates State
const newUser = List.find(obj => {
  return obj._id === id;
})
console.log(newUser);

let newTasks = newUser.task;
    return (
      <div className={style.contentTable}>
        <table className={style.contentTable}>
          <thead>
            <tr className={style.headerRow}>
            <th>Task</th>
            <th>Deadline</th>
            <th>Status</th>
            </tr>
          </thead>
          <tbody>
      {newTasks.map((item, index) => {
        const noDeadline  = () => {
            return "N/A";
          } ;
        return (
          <>
      <tr key={item._id} className={style.item}>
        <Button variant="third" onClick={() => setModalOpen(true)}>
      <td className={style.taskTitle}>{item.title}</td> 
      <td> {item.due ? item.due : noDeadline()} </td>
      <td> {item.status}</td> 
      </Button>
      <TodoItem
        getList={getList}
        List={List}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      </tr>
      </>
      )})}
       </tbody>
    </table>
    </div>
    )}


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