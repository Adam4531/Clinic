import { NavLink } from "react-router-dom";
import styles from "./CrewStyles.module.css";
import { useState, useEffect } from 'react';

function CrewPage() {
  const [crewFetch, setCrew] = useState([]);
  useEffect(() => {
    // Fetch the Payroll Data related to the logged in User
    fetch('http://127.0.0.1:8000/auth/users/?email=&is_staff=true&is_receptionist=false&is_active=true', {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCrew(data);
      });
      
  }, []);
  console.log(crewFetch)
 return (
        <div className={styles.tile_box}>
          {crewFetch.map((doctor)=>(
            <NavLink to={`/appointments-register/${doctor.id}`} className={styles.link}><div className={styles.tile} id="doctor1">
            <div className={styles.desc}>
              <div className={styles.head}>{doctor.first_name} {doctor.last_name}</div>
              <div className={styles.subhead}>{doctor.title_of_degree}</div>
              <div className={styles.doc_desc}>{doctor.specialization}</div>
            </div>
          </div>
          </NavLink>
          ))}
        </div>
      );
    }
    
    export default CrewPage;