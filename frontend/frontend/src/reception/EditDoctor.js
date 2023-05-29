import React, { useState } from "react";
import styles from "./EditDoctor.module.css";
import { Form } from 'react-router-dom';
function EditDoctor(props) {

  
    return (
        <div className={styles.container}>
          <div className={styles.body}>
            <div className={styles.addDoctor}>
                <h2 className={styles.h2_}>Wpisz lekarza</h2>
                <Form method="post" className={styles.form}>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input id="email" className={styles.input} type="text" name="email" required />
                    </p>
                    <p>
                        <label htmlFor="password">Hasło</label>
                        <input id="password" type="text" name="password" required />
                    </p>
                    <p>
                        <label htmlFor="name">Imię</label>
                        <input id="name" type="text" name="name" required />
                    </p>
                    <p>
                        <label htmlFor="surname">Nazwisko</label>
                        <input id="surname" type="text" name="surname" required />
                    </p>
                    <p>
                        <label htmlFor="peselNumber">Numer PESEL</label>
                        <input id="peselNumber" type="text" name="peselNumber" required />
                    </p>
                    </Form>
              <button className={styles.btn_confirm} onClick={false}>Zatwierdź</button>
            </div>
            <div className={styles.deleteDoctor}>
              <h2 className={styles.h2_}>Usuń lekarza</h2>
              <Form method="post" className={styles.form}>
                    <p>
                        <label htmlFor="peselNumber">Numer PESEL</label>
                        <input id="peselNumber" type="text" name="peselNumber" required />
                    </p>
                </Form>
              <button className={styles.btn_confirm} onClick={false}>Zatwierdź</button>
            </div>
          </div>
        </div>
      );
    }
    
    export default EditDoctor;