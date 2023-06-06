import React, { useState, useEffect } from "react";
import styles from "./HisotryDoctor.module.css";
function HistoryDoctor(props) {
  const [patientFetch, setPatient]=useState(false);
  const [selectedRecIndex, setSelectedRecIndex] = useState(null);
  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/patients/patient`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          SameSite: "none",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPatient(data);
      });
  }, []);
  console.log(patientFetch)
  const handleRecommendationClick = (index) => {
    setSelectedRecIndex(index);
  };
  
  
    return (
        <div className={styles.container}>
          
          <div>
            <h1 className={styles.h1_}>Historia</h1>
          </div>
          <div className={styles.body}>
            <div className={styles.recommendations}>
              <h2 className={styles.h2_}>Lista pacjentów</h2>
              {patientFetch && <div>
              {patientFetch.map((data, index)=>(
                <div key={data.id} className={styles.recommendation} onClick={() => handleRecommendationClick(index)}>
                <span className={styles.rec_info}>Imię i nazwisko: {data.first_name}  {data.last_name}</span>
              </div>
              ))}
              </div>}
            </div>
            <div className={styles.details}>
              <h2 className={styles.h2_}>Historia leczenia wybranego pacjenta</h2>
              {selectedRecIndex !== null && <div>
              <span className={styles.rec_info}>Imię: {patientFetch[selectedRecIndex].first_name}</span>
              <span className={styles.rec_info}>Nazwisko: {patientFetch[selectedRecIndex].last_name}</span>
              <span className={styles.rec_info}>Pesel: {patientFetch[selectedRecIndex].pesel}</span>
              <span className={styles.rec_info}>Alergie: {patientFetch[selectedRecIndex].allergies}</span>
              <span className={styles.rec_info}>Historia wizyt:</span>
              </div>}
            </div>
          </div>
        </div>
      );
    }
    
    export default HistoryDoctor;