import React, { useEffect, useState } from "react";
import styles from "./HomeReception.module.css";
function HomeReception(props) {
  const [succesIsShown, setSuccesIsShown]=useState(false);
  const [doctor, setDoctor] = useState([]);
  const [visit, setVisit] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/auth/users/?email=&is_staff=true&is_receptionist=', {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          SameSite: "none",
        },
    })
    .then((res) => res.json())
    .then((data) => {
      setDoctor(data);
      console.log(data);
    });
    fetch('http://127.0.0.1:8000/visits/visits?is_confirmed=false', {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          SameSite: "none",
        },
    })
    .then((res) => res.json())
    .then((data) => {
      setVisit(data);
    })
  }, [])

  const showSuccesHandler = (event) =>{
    event.preventDefault();
    setSuccesIsShown(true);
  }
  const hideSuccesHandler = () =>{
    setSuccesIsShown(false);
    console.log('dodano wizyte')
  }
  
    return (
        <div className={styles.container}>
          <div className={styles.body}>
            <div className={styles.doctors}>
              <h2 className={styles.h2_}>Lekarze</h2>
              {doctor.map((doc) => 
              <div className={styles.doctor}>
                <div className={styles.rec_info}>Lekarz: {doc.first_name} {doc.last_name}</div>
              </div>
              )}
              <button onClick={showSuccesHandler} className={styles.primary_btn_submit}>
                Zarządzaj lekarzami
              </button>
            </div>
            <div className={styles.visits}>
              <h2 className={styles.h2_}>Wizyty do potwierdzenia</h2>
              {visit.map((vis) =>
                <div className={styles.visit}>
                <div className={styles.rec_info}>Data: {vis.date}</div>
              </div>
              )}
              
              <button onClick={showSuccesHandler} className={styles.primary_btn_submit}>
                Zarządzaj wizytami
              </button>
              <button onClick={showSuccesHandler} className={styles.second_btn_submit}>
                Generuj listę wszystkich dzisiejszych wizyt
              </button>
            </div>
          </div>
        </div>
      );
    }
    
    export default HomeReception;