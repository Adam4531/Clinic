import React, { useState } from "react";
import styles from "./HisotryDoctor.module.css";
import AddRecc from "./AddRecc";
function HistoryDoctor(props) {
  const [succesIsShown, setSuccesIsShown]=useState(false);

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
          {succesIsShown && <AddRecc onHideCart={hideSuccesHandler}/>}
          <div>
            <h1 className={styles.h1_}>Historia</h1>
          </div>
          <div className={styles.body}>
            <div className={styles.recommendations}>
              <h2 className={styles.h2_}>Lista pacjentów</h2>
              <div className={styles.recommendation}>
                <span className={styles.rec_info}>Imię i nazwisko:</span>
              </div>
              <div className={styles.recommendation}>
                <span className={styles.rec_info}>Imię i nazwisko:</span>
              </div>
              <div className={styles.recommendation}>
                <span className={styles.rec_info}>Imię i nazwisko:</span>
              </div>
              <div className={styles.recommendation}>
                <span className={styles.rec_info}>Imię i nazwisko:</span>
              </div>
              <div className={styles.recommendation}>
                <span className={styles.rec_info}>Imię i nazwisko:</span>
              </div>
              <div className={styles.recommendation}>
                <span className={styles.rec_info}>Imię i nazwisko:</span>
              </div>
              
            </div>
            <div className={styles.details}>
              <h2 className={styles.h2_}>Historia leczenia wybranego pacjenta</h2>
              <span className={styles.rec_info}>Imię:</span>
              <span className={styles.rec_info}>Nazwisko:</span>
              <span className={styles.rec_info}>Numer telefonu:</span>
              <span className={styles.rec_info}>Alergie:</span>
              <span className={styles.rec_info}>Stosowane leki:</span>
              <span className={styles.rec_info}>Historia wizyt:</span>
              <button onClick={showSuccesHandler} className={styles.primary_btn_submit}>
                Dodaj zalecenia
              </button>
            </div>
          </div>
        </div>
      );
    }
    
    export default HistoryDoctor;