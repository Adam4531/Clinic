import React, { useState } from "react";
import styles from "./EditDoctor.module.css";
import { Form } from 'react-router-dom';

function EditDoctor(props) {
  const [successIsShown, setSuccessIsShown] = useState(false);
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [pesel, setPesel] = useState('');
  const [peselToDelete, setPeselToDelete] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswdChange = (event) => {
    setPasswd(event.target.value);
  };
  const handleFnameChange = (event) => {
    setFname(event.target.value);
  };
  const handleLnameChange = (event) => {
    setLname(event.target.value);
  };
  const handlePeselChange = (event) => {
    setPesel(event.target.value);
  };
  const handlePeselToDeleteChange = (event) => {
    setPeselToDelete(event.target.value);
  };

  const hideSuccessHandler = () => {
    setSuccessIsShown(false);
    console.log('dziala');
  };

  const addDoctorToDatabase = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      first_name: fname,
      last_name: lname,
      password: passwd,
      pesel: pesel
    };
    console.log(data);
    // Kod do dodawania lekarza do bazy danych
    // fetch(...)
  };

  const deleteDoctorFromDatabase = (event) => {
    event.preventDefault();
    const data = {
      pesel: peselToDelete
    };
    console.log(data);
    // Kod do usuwania lekarza z bazy danych
    // fetch(...)
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.addDoctor}>
          <h2 className={styles.h2_}>Wpisz lekarza</h2>
          <Form method="post" className={styles.form}>
            <p>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email-input"
                name="email"
                onChange={handleEmailChange}
                placeholder="Email"
              />
            </p>
            <p>
              <label htmlFor="password">Hasło</label>
              <input
                type="text"
                id="passwd-input"
                name="passwd"
                onChange={handlePasswdChange}
                placeholder="Passwd"
              />
            </p>
            <p>
              <label htmlFor="name">Imię</label>
              <input
                type="text"
                id="name-input"
                name="name"
                onChange={handleFnameChange}
                placeholder="Imię"
              />
            </p>
            <p>
              <label htmlFor="surname">Nazwisko</label>
              <input
                type="text"
                id="surname-input"
                name="surname"
                onChange={handleLnameChange}
                placeholder="Nazwisko"
              />
            </p>
            <p>
              <label htmlFor="peselNumber">Numer PESEL</label>
              <input
                type="text"
                id="pesel-input"
                name="pesel"
                onChange={handlePeselChange}
                placeholder="Pesel"
              />
            </p>
          </Form>
          <button
            className={styles.btn_confirm}
            onClick={addDoctorToDatabase}
          >
            Zatwierdź
          </button>
        </div>
        <div className={styles.deleteDoctor}>
          <h2 className={styles.h2_}>Usuń lekarza</h2>
          <Form method="post" className={styles.form}>
            <p>
              <label htmlFor="peselNumber">Numer PESEL</label>
              <input
                id="peselNumber"
                type="text"
                name="peselNumber"
                onChange={handlePeselToDeleteChange}
                required
              />
            </p>
          </Form>
          <button
            className={styles.btn_confirm}
            onClick={deleteDoctorFromDatabase}
          >
            Zatwierdź
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditDoctor;
