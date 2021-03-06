import React, { useState } from "react";
import styles from "../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";
import { useHistory } from "react-router-dom";




function SignUpModal({ List, id, createList, getList, modalOpen, setModalOpen }) {

let history = useHistory();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  //Create handleChange
  //================
  const handleChange = (e) => {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
    console.log(form);
    console.log(List);
  };

  //Create handleSubmit function
  //======================
  const handleSubmit = (e) => {
    //prevents reload on submit
    e.preventDefault();
    createList(form);
    setForm({ name: "", email: "", password: "" });
    console.log(List);
    history.push(`/Welcome`)
  };

  const { name, email, password } = form;

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
          <section>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h1 className={styles.formSignUp}>Sign Up</h1>
              <label htmlFor="SignUp">
                Name
                <input
                  value={name}
                  name="name"
                  onChange={handleChange}
                  type="text"
                  id="name"
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  value={email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  value={password}
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                />
              </label>
              <div className={styles.buttonContainer}>
                  <Button type="submit" variant="primary">
                    Sign-Up
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
          </section>
        </div>
      </div>
    )
  );
}

export default SignUpModal;