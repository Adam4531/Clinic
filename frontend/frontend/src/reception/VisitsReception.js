import React, { useEffect, useState } from "react";
import styles from "./VisitsReception.module.css";
import ConfimVisit from "./ConfirmVisit";
import NewDate from './NewDate'
function VisitsReception(props) {
  const [visit, setVisit] = useState([]);
  const [visitIndex, setVisitIndex] = useState(null);
  const [succesIsShown, setSuccesIsShown] = useState(false);
  const [dateIsShown, setDateIsShown] = useState(false);
  
  const showSuccesHandler = (event) => {
    event.preventDefault();
      setSuccesIsShown(true);
    
  };
  const hideSuccesHandler = () => {
    setSuccesIsShown(false);
    // console.log("dodano wizyte");
  };

  const showDateHandler = (event) => {
    event.preventDefault();
    setDateIsShown(true);
    
  };
  const hideDateHandler = () => {
    setDateIsShown(false);
    // console.log("dodano wizyte");
  };
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
    })
  },[])

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
                <div className={styles.visit} onClick={() => handleIndexChange(index)} key={vis.id}>
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
                <div className={styles.vis_info}><span className={styles.info}>Opis dolegliwości:</span> {visit[visitIndex].description}</div>
                <div className={styles.btns}>
                {visit[visitIndex].is_confirmed === false && <button className={styles.primary_btn_submit} onClick={showSuccesHandler}>Potwierdź wizytę</button>}
                {visit[visitIndex].is_confirmed === false && <button className={styles.second_btn_submit} onClick={showDateHandler}>Modyfikuj datę</button>}
                {/* <button className={styles.second_btn_submit}>Archiwizuj</button> */}
                {succesIsShown && <ConfimVisit
                  onHideCart={hideSuccesHandler}
                  visit={visit[visitIndex]}
                  // timeSuc={selectedTime}
                />}
                {dateIsShown && <NewDate
                  onHideCart={hideDateHandler}
                  visit={visit[visitIndex]}
                  // timeSuc={selectedTime}
                />}
              </div>
              </div>
              )}
              {/* <div className={styles.btns}>
                {visit[visitIndex].is_confirmed === true && <button className={styles.primary_btn_submit}>Potwierdź wizytę</button>}
                {<button className={styles.second_btn_submit}>Modyfikuj datę</button>}
                <button className={styles.second_btn_submit}>Archiwizuj</button>
              </div> */}
            </div>
          </div>
        </div>
      );
    }
    
    export default VisitsReception;