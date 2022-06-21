import React, { useState } from 'react';
import Button from '../components/Button';
import style from '../styles/modules/app.module.scss';
import SignInModal from '../components/SignInModal';
import SignUpModal from '../components/SignUpModal';


function LandingPage(props) {
const [modalOpen, setModalOpen] = useState(false); 
 const [modalOpen2, setModalOpen2] = useState(false)
  return ( 
    <div className={style.appHeader}>

        <Button variant='primary' onClick = { () => setModalOpen(true) }>Sign-Up</Button>
        <SignUpModal modalOpen={modalOpen} setModalOpen={setModalOpen} getList={props.getList}  createList={props.createList} List={props.List}/>

         <Button variant='primary' onClick = { () => setModalOpen2(true) }>Sign-In</Button>
        <SignInModal modalOpen2={modalOpen2} setModalOpen2={setModalOpen2}/>
    </div>
   )}
  


export default LandingPage;