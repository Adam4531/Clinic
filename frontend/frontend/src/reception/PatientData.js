import React, { useEffect, useState } from "react";
import styles from "./PatientData.module.css";
function HistoryDoctor(props) {
  const [succesIsShown, setSuccesIsShown]=useState(false);
  const [patient, setPatient] = useState([]);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/auth/users/?email=&is_staff=false&is_receptionist=false', {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          SameSite: "none",
        },
    })
    .then((res) => res.json())
    .then((data) => {
      setPatient(data);
      console.log(data);
    });
  }, [])

  const handleIndexChange = (id) => {
    setIndex(id);
  }

    return (
        <div className={styles.container}>
          <div>
            <h1 className={styles.h1_}>Pacjenci</h1>
          </div>
          <div className={styles.body}>
            <div className={styles.recommendations}>
              <h2 className={styles.h2_}>Lista pacjentów</h2>
              {patient.map((person, index) =>
              <div className={styles.recommendation} onClick={() => handleIndexChange(index)}>
                <div className={styles.rec_info}>Pacjent: <span className={styles.info}>{person.first_name} {person.last_name}</span></div>
                <div className={styles.rec_info}>PESEL: <span className={styles.info}>{person.pesel}</span></div>
              </div> 
              )}          
            </div>

            <div className={styles.details}>
              <h2 className={styles.h2_}>O pacjencie</h2>
              {index !== null && (
                <div>
                  <div className={styles.rec_info}>Imię: <span className={styles.info}>{patient[index].first_name}</span></div>
                  <div className={styles.rec_info}>Nazwisko: <span className={styles.info}>{patient[index].last_name}</span></div>
                  <div className={styles.rec_info}>PESEL: <span className={styles.info}>{patient[index].pesel}</span></div>
                  <div className={styles.rec_info}>Numer telefonu: <span className={styles.info}>{patient[index].phone_number}</span></div>
                  <div className={styles.rec_info}>Alergie: <span className={styles.info}>{patient[index].allergies}</span></div>
                  <div className={styles.rec_info}>Stosowane leki: <span className={styles.info}>{patient[index].medicines}</span></div>
                  <div className={styles.rec_info}>Historia wizyt:</div>
                  <div className={styles.visits}>
                  {patient[index].visits.map((visit) =>
                  <div className={styles.visit}>
                      <div className={styles.rec_info}>Data: <span className={styles.info}>{visit.date}</span></div> 
                      <div className={styles.rec_info}>Lekarz: <span className={styles.info}>{visit.doctor.first_name} {visit.doctor.last_name}</span></div>
                  </div>
                  )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
    
    export default HistoryDoctor;