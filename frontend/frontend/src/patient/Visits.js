import styles from "./Visits.module.css";
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
function VisitsPage() {
  const [visitUncomingFetch, setVisitUncoming] = useState([]);
  const [visitPastFetch, setVisitPast] = useState([]);
  // const [nameFetch, setName] = useState('');
 
  useEffect(() => {
    const currentDate = new Date();
    fetch(
      `http://127.0.0.1:8000/visits/visits?date=&patient=${localStorage.getItem(
        "owner"
      )}&doctor=&recommendation=`,
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
        data.forEach((element) => {
          const fetchedDate = new Date(element.date);
          if (fetchedDate > currentDate) {
              setVisitUncoming((current) => [...current, element]);
          } else {
              setVisitPast((current) => [...current, element]);
          }
        });
      });
  }, []);

  
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.h1_}>Lista wizyt</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.upcoming}>
          <h2 className={styles.h2_}>Nadchodzące</h2>
          {visitUncomingFetch.map((visit) => (
            <NavLink
            to={`${visit.id}`} ><div className={styles.upcoming_visit} key={visit.url}>
              <span className={styles.date}><span className={styles.info}>Data:</span> {visit.date}</span>
              <span className={styles.doctor}><span className={styles.info}>Lekarz:</span> {visit.doctor.first_name} {visit.doctor.last_name}</span>
            </div>
            </NavLink>
          ))}
        </div>
        <div className={styles.past}>
          <h2 className={styles.h2_}>Przeszłe</h2>
          {visitPastFetch.map((visit) => (
             <NavLink
             to={`past/${visit.id}`} ><div className={styles.past_visit} key={visit.url}>
              <div className={styles.date}><span className={styles.info}>Data:</span> {visit.date}</div>
              <div className={styles.doctor}><span className={styles.info}>Lekarz:</span> {visit.doctor.first_name} {visit.doctor.last_name}</div>
            </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VisitsPage;
