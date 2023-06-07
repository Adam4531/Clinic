import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./HomeReception.module.css";
import ConfimVisit from "./ConfirmVisit";
function HomeReception(props) {
  const [succesIsShown, setSuccesIsShown]=useState(false);
  const [doctor, setDoctor] = useState([]);
  const [visit, setVisit] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/auth/users/?email=&is_staff=true&is_receptionist=false', {
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
    fetch('http://127.0.0.1:8000/visits/visits?date=&patient=&doctor=&is_confirmed=false', {
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
            <div className={styles.empty}>
            <div className={styles.doctors}>
              <h2 className={styles.h2_}>Lekarze</h2>
              {doctor.map((doc) => 
              <div className={styles.doctor}>
                <div className={styles.rec_info}><span className={styles.info}>Lekarz: </span>{doc.first_name} {doc.last_name}</div>
                <div className={styles.rec_info}><span className={styles.info}>Specjalizacja: </span>{doc.specialization}</div>
              </div>
              )}
             
            </div>
            <NavLink to='/editdoctor' className={styles.primary_btn_submit}>
                Zarządzaj lekarzami
              </NavLink>
            </div>
            <div className={styles.empty}>
            <div className={styles.visits}>
              <h2 className={styles.h2_}>Wizyty do potwierdzenia</h2>
              {visit.map((vis) =>
                <div className={styles.visit} onClick={showSuccesHandler}>
                  <div className={styles.rec_info}><span className={styles.info}>Data: </span>{vis.date}</div>
                  <div className={styles.rec_info}><span className={styles.info}>Pacjent: </span>{vis.patient.first_name} {vis.patient.last_name}</div>
                  {succesIsShown && <ConfimVisit
                  onHideCart={hideSuccesHandler}
                  visit={vis}
                  // timeSuc={selectedTime}
                />}
              </div>
              )}
            </div>
            <NavLink to='/visitsreception' className={styles.primary_btn_submit}>
                Zarządzaj wizytami
              </NavLink>
              <button onClick={showSuccesHandler} className={styles.second_btn_submit}>
                Generuj listę wszystkich dzisiejszych wizyt
              </button>
            </div>
          </div>
        </div>
      );
    }
    
    export default HomeReception;