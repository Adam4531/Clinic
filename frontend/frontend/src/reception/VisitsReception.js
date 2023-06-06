import React, { useEffect, useState } from "react";
import styles from "./VisitsReception.module.css";

function VisitsReception(props) {
  const [visit, setVisit] = useState([]);
  const [visitIndex, setVisitIndex] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/visits/visits', {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
            SameSite: "none",
      }
    })
    .then((res) => res.json())
    .then((data) => {
      setVisit(data);
      console.log(data);
    })
  })

  const handleIndexChange = (id) => {
    setVisitIndex(id);
  }

    return (
        <div className={styles.container}>
          <div>
            <h1 className={styles.h1_}>Wizyty</h1>
          </div>
          <div className={styles.body}>
            <div className={styles.visits}>
              <h2 className={styles.h2_}>Lista pacjentów</h2>
              <div className={styles.visitsBar}>
              {visit.map((vis, index) => 
                <div className={styles.visit} onClick={() => handleIndexChange(index)}>
                    <div className={styles.rec_info}><span className={styles.info}>Data:</span> {vis.date}</div>
                    <div className={styles.rec_info}><span className={styles.info}>Lekarz:</span> {vis.doctor.first_name} {vis.doctor.last_name}</div>
                </div>
                )}
              </div>
              <button onClick={false} className={styles.primary_btn_submit}>
                Generuj listę dzisiejszych wizyt
              </button>
            </div>
            <div className={styles.restOfTheSite}>
              <h2 className={styles.h2_}>Wizyta</h2>
              {visitIndex !== null && (
              <div>
                <div className={styles.vis_info}><span className={styles.info}>Data i godzina:</span> {visit[visitIndex].date}</div>
                <div className={styles.vis_info}><span className={styles.info}>Pacjent:</span> {visit[visitIndex].patient.first_name} {visit[visitIndex].patient.last_name}</div>
                <div className={styles.vis_info}><span className={styles.info}>Lekarz:</span> {visit[visitIndex].doctor.first_name} {visit[visitIndex].doctor.last_name}</div>
                <div className={styles.vis_info}><span className={styles.info}>Dodatkowe informacje:</span> {visit[visitIndex].additional_information}</div>
              </div>
              )}
              <div className={styles.btns}>
                <button className={styles.primary_btn_submit}>Dodaj zalecenia</button>
                <button className={styles.second_btn_submit}>Modyfikuj datę</button>
                <button className={styles.second_btn_submit}>Archiwizuj</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default VisitsReception;