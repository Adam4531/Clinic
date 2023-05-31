
import styles from "./Visits.module.css";
import { useState, useEffect } from 'react';

function VisitsPage() {
    const [visitFetch, setVisit] = useState([]);
    

    useEffect(() => {
    // Fetch the Payroll Data related to the logged in User
    fetch(`http://127.0.0.1:8000/visits/visits?date=&patient=${localStorage.getItem('owner')}&doctor=&recommendation=`, {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setVisit(data);
      });
      
  }, []);

  console.log(visitFetch)
    return (
        <div className={styles.container}>
          <div>
            <h1 className={styles.h1_}>Lista wizyt</h1>
          </div>
          <div className={styles.body}>
            <div className={styles.upcoming}>
              <h2 className={styles.h2_}>Nadchodzące</h2>
              <div className={styles.upcoming_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
            </div>
            <div className={styles.past}>
              <h2 className={styles.h2_}>Przeszłe</h2>
              <div className={styles.past_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
              <div className={styles.past_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
              <div className={styles.past_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
              <div className={styles.past_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default VisitsPage;