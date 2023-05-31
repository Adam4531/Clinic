import styles from "./Visits.module.css";
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
function VisitsPage() {
  const [visitUncomingFetch, setVisitUncoming] = useState([]);
  const [visitPastFetch, setVisitPast] = useState([]);
  useEffect(() => {
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
        console.log(data);
        data.forEach((element) => {
          if (element.date > Date.now()) {
            // if (!visitUncomingFetch.includes(element)) {
              setVisitUncoming((current) => [...current, element]);
            // }
          } else {
            // if (!visitPastFetch.includes(element)) {
              setVisitPast((current) => [...current, element]);
              console.log(visitPastFetch)
            // }
          }
        });
      });
  }, []);
console.log(visitPastFetch)
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
            to={`${visit.id}`} ><div className={styles.upcoming_visit} key={visit.id}>
              <span className={styles.date}>Data: {visit.date}</span>
              <span className={styles.doctor}>Lekarz: {visit.doctor}</span>
            </div>
            </NavLink>
          ))}
        </div>
        <div className={styles.past}>
          <h2 className={styles.h2_}>Przeszłe</h2>
          {visitPastFetch.map((visit) => (
             <NavLink
             to={`past/${visit.id}`} ><div className={styles.past_visit} key={visit.id}>
              <span className={styles.date}>Data: {visit.date}</span>
              <span className={styles.doctor}>Lekarz: {visit.doctor}</span>
            </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VisitsPage;
