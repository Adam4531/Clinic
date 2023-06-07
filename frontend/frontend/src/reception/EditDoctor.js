import React, { useState } from "react";
import SuccessDoctor from "./CorrectData";
import styles from "./EditDoctor.module.css";
import { Form } from "react-router-dom";
import DeactivationConfirm from "./DeactivationConfim";
function EditDoctor(props) {
  const [succesIsShown, setSuccesIsShown] = useState(false);
  const [deletedIsShown, setDeletedIsShown] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [pesel, setPesel] = useState("");
  const [doctor, setDoctor] = useState({});
  const [deavtivateDoctor, setDeavtivateDoctor] = useState({});

  const [fname_d, setFname_d] = useState("");
  const [lname_d, setLname_d] = useState("");
  const [password_d, setPassword_d] = useState("");
  const [email_d, setEmail_d] = useState("");

  const handleFnameChange = (event) => {
    setFname(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleLname = (event) => {
    setLname(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSpecializationChange = (event) => {
    setSpecialization(event.target.value);
  };
  const handlePeselChange = (event) => {
    setPesel(event.target.value);
  };


  const handleFnameChange_d = (event) => {
    setFname_d(event.target.value);
  };
  const handleEmailChange_d = (event) => {
    setEmail_d(event.target.value);
  };
  const handleLname_d = (event) => {
    setLname_d(event.target.value);
  };
  const handlePasswordChange_d = (event) => {
    setPassword_d(event.target.value);
  };
  const showDeactivateHandler = (event) => {
    event.preventDefault();
    const data = {
      first_name: fname_d,
      last_name: lname_d,
      email: email_d,
      password: password_d,
      
    };
    setDeavtivateDoctor(data)
    
    setDeletedIsShown(true);
    
  };
  const hideDeletedHandler = () => {
    setDeletedIsShown(false);
    console.log("dodano wizyte");
  };
  const showSuccesHandler = (event) => {
    event.preventDefault();
    const data = {
      first_name: fname,
      last_name: lname,
      pesel: pesel,
      email: email,
      password: password,
      is_staff: true,
      is_receptionist: false,
      specialization: specialization
    };
    setDoctor(data)
    
    setSuccesIsShown(true);
    
  };
  const hideSuccesHandler = () => {
    setSuccesIsShown(false);
    console.log("dodano wizyte");
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
                id="email"
                className={styles.input}
                type="text"
                onChange={handleEmailChange}
                required
              />
            </p>
            <p>
              <label htmlFor="password">Hasło</label>
              <input id="password" type="text" onChange={handlePasswordChange} required />
            </p>
            <p>
              <label htmlFor="name">Imię</label>
              <input id="name" type="text" onChange={handleFnameChange} required />
            </p>
            <p>
              <label htmlFor="surname">Nazwisko</label>
              <input id="surname" type="text" onChange={handleLname} required />
            </p>
            <p>
              <label htmlFor="peselNumber">Numer PESEL</label>
              <input id="peselNumber" type="text" onChange={handlePeselChange} required />
            </p>
            <p>
              <label htmlFor="peselNumber">Specjalizacja</label>
              <select id="doctors" value={specialization}
                onChange={handleSpecializationChange}>
                <option value="">Wybierz specjalizację</option>
                <option value="Chirurg">Chirurg</option>
                <option value="Lekarz rodzinny">Lekarz rodzinny</option>
                <option value="Stomatolog">Stomatolog</option>
                <option value="Dermatolog">Dermatolog</option>
                <option value="Ortopeda">Ortopeda</option>
                <option value="Internista">Internista</option>
                <option value="Pediatra">Pediatra</option>
              </select>
            </p>
          </Form>
          {succesIsShown && <SuccessDoctor 
            onHideCart={hideSuccesHandler} doctor={doctor}/>
          }
          <button className={styles.btn_confirm} onClick={showSuccesHandler}>
            Zatwierdź
          </button>
        </div>
        <div className={styles.deleteDoctor}>
          <h2 className={styles.h2_}>Usuń lekarza</h2>
          <Form method="post" className={styles.form}>
            <p>
              <label htmlFor="fnmae">Imię</label>
              <input id="fname" type="text" onChange={handleFnameChange_d}  required />
            </p>
            <p>
              <label htmlFor="lname">Nazwisko</label>
              <input id="lname" type="text" onChange={handleLname_d} required />
            </p>
            <p>
              <label htmlFor="pass">Hasło</label>
              <input id="pass" type="text" onChange={handlePasswordChange_d} required />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input id="email" type="text" onChange={handleEmailChange_d} required />
            </p>
          </Form>
          <button className={styles.btn_confirm} onClick={showDeactivateHandler}>
            Zatwierdź
          </button>
          {deletedIsShown && <DeactivationConfirm
            onHideCart={hideDeletedHandler} doctor={deavtivateDoctor}/>
          }
        </div>
      </div>
    </div>
  );
}

export default EditDoctor;
