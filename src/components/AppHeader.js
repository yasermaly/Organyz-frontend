import React, { useState } from 'react'
import Button, { SelectButton } from './Button';
import style from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';



function AppHeader({getList, List, id, createItem}) {
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
        getList={getList}
        createItem={createItem}
        List={List}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        id={id}
      />
    </div>
  );
}

export default AppHeader;