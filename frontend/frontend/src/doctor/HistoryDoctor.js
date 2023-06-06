import React, { useState, useEffect } from "react";
import styles from "../reception/PatientData.module.css";
function HistoryDoctor(props) {
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

  console.log(patient)
  const handleRecommendationClick = (index) => {
    setIndex(index);
  };
  
  
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.h1_}>Pacjenci</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.recommendations}>
          <h2 className={styles.h2_}>Lista pacjentów</h2>
          {patient.map((person, index) =>
          <div className={styles.recommendation} onClick={() => handleRecommendationClick(index)}>
            <div className={styles.rec_info}><span className={styles.info}>Pacjent: </span>{person.first_name} {person.last_name}</div>
            <div className={styles.rec_info}><span className={styles.info}>PESEL: </span>{person.pesel}</div>
          </div> 
          )}          
        </div>

        <div className={styles.details}>
          <h2 className={styles.h2_}>O pacjencie</h2>
          {index !== null && (
            <div>
              <div className={styles.rec_info}><span className={styles.info}>Imię: </span>{patient[index].first_name}</div>
              <div className={styles.rec_info}><span className={styles.info}>Nazwisko: </span>{patient[index].last_name}</div>
              <div className={styles.rec_info}><span className={styles.info}>PESEL: </span>{patient[index].pesel}</div>
              <div className={styles.rec_info}><span className={styles.info}>Numer telefonu: </span>{patient[index].phone_number}</div>
              <div className={styles.rec_info}><span className={styles.info}>Alergie: </span>{patient[index].allergies}</div>
              <div className={styles.rec_info}><span className={styles.info}>Stosowane leki: </span>{patient[index].medicines}</div>
              <div className={styles.rec_info}><span className={styles.info}>Historia wizyt:</span></div>
              <div className={styles.visits}>
                {patient[index].visits.map((visit) =>
                <div className={styles.visit}>
                    <div className={styles.rec_info}><span className={styles.info}>Data: </span>{visit.date}</div> 
                    <div className={styles.rec_info}><span className={styles.info}>Lekarz: </span>{visit.doctor.first_name} {visit.doctor.last_name}</div>
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