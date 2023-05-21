import React, { useState } from "react";
import styles from "./HomeReception.module.css";
function HomeReception(props) {
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
          <div className={styles.body}>
            <div className={styles.doctors}>
              <h2 className={styles.h2_}>Lekarze</h2>
              <div className={styles.doctor}>
                <span className={styles.rec_info}>Lekarz 1</span>
              </div>
              <div className={styles.doctor}>
                <span className={styles.rec_info}>Lekarz 2</span>
              </div>
              <div className={styles.doctor}>
                <span className={styles.rec_info}>Lekarz 3</span>
              </div>
              <div className={styles.doctor}>
                <span className={styles.rec_info}>Lekarz 4</span>
              </div>
              <button onClick={showSuccesHandler} className={styles.primary_btn_submit}>
                Zarządzaj lekarzami
              </button>
            </div>
            <div className={styles.visits}>
              <h2 className={styles.h2_}>Wizyty do potwierdzenia</h2>
              <div className={styles.visit}>
                <span className={styles.rec_info}>Data</span>
              </div>
              <div className={styles.visit}>
                <span className={styles.rec_info}>Data</span>
              </div>
              <div className={styles.visit}>
                <span className={styles.rec_info}>Data</span>
              </div>
              <div className={styles.visit}>
                <span className={styles.rec_info}>Data</span>
              </div>
              <div className={styles.visit}>
                <span className={styles.rec_info}>Data</span>
              </div>
              
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