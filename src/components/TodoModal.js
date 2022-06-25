import React, { useState } from 'react';
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import Button from './Button';
import { useHistory} from 'react-router-dom';


function TodoModal({List, id, createItem, getList, modalOpen, setModalOpen}) {
 let history = useHistory();

const [title, setTitle] = useState('');
const [due, setDue] = useState('');
const [status, setStatus] = useState('');


  const [item, setItem] = useState({ 
    task : [{
    title: "",
    importance: "",
    timeToComplete: "",
    due: "",
    status: "incomplete",
    }]
  }); // sets state for the item 

  const handleChangeTitle = (e) => {
    setTitle( e.target.value)
    console.log(title)
  }
   const handleChangeDue = (e) => {
    setDue(e.target.value)
    console.log(due)
  }
   const handleChangeStatus = (e) => {
    setStatus(e.target.value)
    console.log(status)
  }

  const handleSubmit = (e) => {
    setItem(item => ({
      task : [{title: title , status: status, due: due}]
    }))
    createItem(item, id)
    setItem({title:"", status:"", importance:"", timeToComplete:"", due:""})
    console.log(item);
    history.push(`/TaskList/${id}`)
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
                value={title}
                onChange={handleChangeTitle}
              />
            </label>
            <label htmlFor="Due">
              Deadline
              <input
              name="due"
              type="date"
              id="due"
              value={due}
              onChange={handleChangeDue}
              />
            </label>
            <label htmlFor="status">
              Status
              <select
                name="status"
                id="status"
                value={status}
                onChange={handleChangeStatus}
              >
                <option value="incomplete">Incomplete</option>
                <option value="completed">Completed</option>
              </select>
            </label>
            <div className={styles.buttonContainer}>
             
                <Button type="submit" variant="primary">
                  Add Task
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

export default TodoModal