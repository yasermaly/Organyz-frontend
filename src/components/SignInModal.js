//Import Statements
//==============
import React, { useState } from 'react';
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import Button from './Button';
import { Link } from "react-router-dom";

//SignInModal Function Created
//======================

function SignInModal({ modalOpen2, setModalOpen2}) {
const [account, setAccount] = useState({
  email: "",
  password: "",
})

const handleSubmit = (e) => {
    e.preventDefault(); //prevents page reload on submit
    <Link />
    console.log({account});
  }
  return (
         modalOpen2 && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.closeButton}
            onClick = { () => setModalOpen2(false)}
            onKeyDown = { () => setModalOpen2(false)}>
              <MdOutlineClose />
            </div>
            <form className={styles.form} onSubmit={ (e) => handleSubmit(e)}>
              <h1 className={styles.formSignIn}>Sign In</h1>
              <label htmlFor="email">
                Email
                <input
                type="email"
                name="email" 
                id="email" 
                value={account.email} 
                onChange={(e) => setAccount.email(e.target.value)}
                />
              </label>
              <label htmlFor="password">
                    Password
                    <input 
                    type="password"
                    name="password"
                    id="password"
                    value={account.password}
                    onChange={(e) => setAccount.password(e.target.value)}
                    />
                </label>
              <div className={styles.buttonContainer}>
                <Button type="submit" variant="primary">
                 Sign In
                </Button>
                <Button variant="secondary" 
                onClick = { () => setModalOpen2(false) }
                onKeyDown = { () => setModalOpen2(false) }>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
) )}

export default SignInModal;