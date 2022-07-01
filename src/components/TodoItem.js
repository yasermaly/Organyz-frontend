import React, { useState } from 'react';
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import Button from './Button';
import { useHistory} from 'react-router-dom';


function TodoItem({List, id, itemID, newTasks,updateItem, getList, modalOpen, setModalOpen}) {
 let history = useHistory();
 console.log(itemID)

let thisT = newTasks.find( obj => {
 return obj._id === itemID;
})

console.log(thisT)

const [theTitle, setTitle] = useState(thisT.title);
const [theImportance, setImportance] = useState(thisT.importance);
const [theTimeToComplete, setTimeToComplete] = useState(thisT.timeToComplete);
const [theDue, setDue] = useState(thisT.due);
const [theStatus, setStatus] = useState(thisT.status);


  const [item, setItem] = useState({ 
    task : [{
    title: theTitle,
    importance: theImportance,
    timeToComplete: theTimeToComplete,
    due: theDue,
    status: theStatus,
    }]
  }); // sets state for the item 

  const handleChangeTitle = (e) => {
    setTitle( e.target.value);
     setItem(item => ({
      task : [{
          title: e.target.value,
          due: theDue,
          importance: theImportance,
          timeToComplete: theTimeToComplete,
          status: theStatus,
      }]
    }))
    console.log(theTitle)
  }
   const handleChangeDue = (e) => {
    setDue(e.target.value);
      setItem(item => ({
      task : [{
          title: theTitle,
          due: e.target.value,
          importance: theImportance,
          timeToComplete: theTimeToComplete,
          status: theStatus,
      }]
    }))
    console.log(theDue)
  }
   const handleChangeImportance = (e) => {
    setImportance(e.target.value)
       setItem(item => ({
      task : [{
          title: theTitle,
          due: theDue,
          importance: e.target.value,
          timeToComplete: theTimeToComplete,
          status: theStatus,
      }]
    }))
    console.log(theImportance)
    console.log(item)
  }
   const handleChangeTime = (e) => {
    setTimeToComplete(e.target.value);
     setItem(item => ({
      task : [{
          title: theTitle,
          due: theDue,
          importance: theImportance,
          timeToComplete: e.target.value,
          status: theStatus,
      }]
    }))
    console.log(theTimeToComplete)
  }
   const handleChangeStatus = (e) => {
    setStatus(e.target[e.target.selectedIndex].value)
    setItem(item => ({
      task : [{
          title: theTitle,
          due: theDue,
          importance: theImportance,
          timeToComplete: theTimeToComplete,
          status: e.target[e.target.selectedIndex].value,
      }]
    }))
    console.log(theStatus)
  }

  const handleSubmit = (e) => {
    updateItem(item, id)
    console.log(item);
    history.push(`/TaskList/${id}/edit`)
  }

  return (
    modalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onClick={() => setModalOpen(false)}
            onKeyDown={() => setModalOpen(false)}
          >
            <MdOutlineClose />
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.formTitle}>Add Task</h1>
            <label htmlFor="title">
              Title
              <input
                name="title"
                type="text"
                id="title"
                value={theTitle}
                onChange={handleChangeTitle}
              />
            </label>
            <label htmlFor="Due">
              Deadline
              <input
              name="due"
              type="date"
              id="due"
              value={theDue}
              onChange={handleChangeDue}
              />
            </label>
            <label htmlFor="timeToComplete">
              How Long to Complete (mins)
              <input
                name="timeToComplete"
                type="number"
                min="1"
                id="time"
                value={theTimeToComplete}
                onChange={handleChangeTime}
              />
            </label>
            <label htmlFor="importance">
              Importance (1-5)
              <input
                name="importance"
                type="number"
                min="1"
                max="5"
                id="importance"
                value={theImportance}
                onChange={handleChangeImportance}
              />
            </label>
            <label htmlFor="status">
              Status
              <select
                name="status"
                id="status"
                value={theStatus}
                onChange={handleChangeStatus}
              >
                <option value="incomplete">Incomplete</option>
                <option value="completed">Completed</option>
              </select>
            </label>
            <div className={styles.buttonContainer}>
             
                <Button type="submit" variant="primary">
                  Update Task
                </Button>
             
              <Button
                variant="secondary"
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default TodoItem;