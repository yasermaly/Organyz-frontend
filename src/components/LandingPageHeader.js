import React, { useState } from 'react'
import Button from './Button';
import style from '../styles/modules/app.module.scss';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

function LandingPageHeader() {
 const [modalOpen, setModalOpen] = useState(true); 
 const [modalOpen2, setModalOpen2] = useState(true);
return (
    <div className={style.appHeader}>
        <Button variant='primary' onClick = { () => setModalOpen(true) }>Sign-Up</Button>
        <SignUpModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
         <Button variant='primary' onClick = { () => setModalOpen2(true) }>Sign-In</Button>
        <SignInModal modalOpen2={modalOpen2} setModalOpen2={setModalOpen2}/>
    </div>
)
}

export default LandingPageHeader;