import styles from "./DetailVisit.module.css";
import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
function DetailVisitPast() {
  const [visitFetch, setVisit] = useState();
  const params = useParams();
  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/visits/visits/${params.id}`,
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
        setVisit(data)
      });
  }, [params]);
  console.log(visitFetch)
    return (
        <div className={styles.container}>
          {visitFetch && <div className={styles.detail_box}>
            <div class={styles.date}>
               Data: {visitFetch.date}
            </div>
            <div className={styles.doctor}>
              Lekarz: {visitFetch.doctor.first_name} {visitFetch.doctor.last_name}
            </div>
            <div className={styles.extra}>
              Dodatkowe informacje: {visitFetch.description}
            </div>
            <div className={styles.control_visit}>
              Data wizyty kontrolnej: {visitFetch.visit_control}
            </div>
            <div className={styles.button_box}>
              <NavLink to='/visits' className={styles.btn_back}>Cofnij</NavLink>
            </div>
          </div>}
        </div>
      );
    }
    
    export default DetailVisitPast;