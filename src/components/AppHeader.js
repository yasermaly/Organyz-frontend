import React, { useState } from 'react'
import Button, { SelectButton } from './Button';
import style from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';



function AppHeader(props) {
  const [modalOpen, setModalOpen] = useState(false); // creates State
  return (
    <div className={style.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal
        getList={props.getList}
        createItem={props.createItem}
        List={props.List}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
}

export default AppHeader;