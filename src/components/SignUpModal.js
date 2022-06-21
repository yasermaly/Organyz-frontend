import React, { useState } from 'react';
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import Button from './Button';
import { Link } from "react-router-dom";

function SignUpModal({ List, createList, getList, modalOpen, setModalOpen}) {

//Create Form useState
//================
let [form, setForm] = useState({
name: "", 
email: "",
password: "",
})

//Create handleChange
//================
// const handleChange = (e) => {
//   setForm({...form, [e.target.form]: e.target.value});
//   console.log(e.target.form);
// }

//Create handleSubmit function
//======================
  const handleSubmit = (e) => {
    //prevents reload on submit
    e.preventDefault();
    createList(form);
    setForm({form})
    console.log({form});
       return (
     <Link form={form} to={`/TaskList`}/>
  );}

//Create Function to return new account
// if info was correctly loaded
//===========================
// const loaded = (List, createList, getList) => {
//   return List.map((...List) => (
//     <div key={List._id} className="theNewList">
     
//     </div>
//   ))
// }

//  const loading = () => {
//     return <h1>Loading...</h1>;
//   }
  
  return (
      modalOpen && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.closeButton}
            onClick = { () => setModalOpen(false)}
            onKeyDown = { () => setModalOpen(false)}>
              <MdOutlineClose />
            </div>
            <section>
            <form className={styles.form} onSubmit={ (e) => handleSubmit(e.target.value)}>
              <h1 className={styles.formSignUp}>Sign Up</h1>
              <label htmlFor="SignUp">
                Name
                <input 
                value={form.name}
                onChange = { (e) => setForm(e)}  
                type="text" 
                id="name" 
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                value={form.email} 
                onChange={(e) => setForm(e.target.value)}
                type="email"
                name="email" 
                id="email" 
                />
                <label htmlFor="password">
                    Password
                    <input 
                    value={form.password}
                    onChange={(e) => setForm(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    />
                </label>
              </label>
              <div className={styles.buttonContainer}>
                <Button type="submit" variant="primary">
                  Sign-Up
                </Button>
                <Button variant="secondary" 
                onClick = { () => setModalOpen(false) }
                onKeyDown = { () => setModalOpen(false) }>
                  Cancel
                </Button>
              </div>
            </form>
            </section>
          </div>
        </div>
  ))}

export default SignUpModal;