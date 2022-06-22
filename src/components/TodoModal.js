import React, { useState } from 'react';
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import Button from './Button';
import { Link } from 'react-router-dom';


function TodoModal({List, createItem, getList, modalOpen, setModalOpen}) {
  // const [title, setTitle] = useState(''); // sets state for the title
  // const [status, setStatus] = useState('incomplete'); // sets state for the status
  const [item, setItem] = useState({ 
    title: "",
    importance: "",
    timeToComplete: "",
    due: "",
    status: "incomplete",
  }); // sets state for the item 

  const handleChange = (e) => {
    setItem(item => ({
      ...item, [e.target.name] : e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents page reload on submit
    createItem(item)
    setItem({title:"", status:"", importance:"", timeToComplete:"", due:""})
    console.log(item);
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
                value={item.title}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="status">
              Status
              <select
                name="status"
                id="status"
                value={item.status}
                onChange={handleChange}
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