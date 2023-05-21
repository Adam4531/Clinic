import React, { useState } from "react";
import styles from "./VisitsReception.module.css";
function VisitsReception(props) {
  
    return (
        <div className={styles.container}>
          <div>
            <h1 className={styles.h1_}>Wizyty</h1>
          </div>
          <div className={styles.body}>
            <div className={styles.visits} styles="overflow-y: scroll;">
              <h2 className={styles.h2_}>Lista pacjentów</h2>
              <div className={styles.visitsBar}>
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
              </div>
              <button onClick={false} className={styles.primary_btn_submit}>
                Generuj listę dzisiejszych wizyt
              </button>
            </div>
            <div className={styles.restOfTheSite}>
              <h2 className={styles.h2_}>Wizyta</h2><br />
              Data i godzina: <br /><br />
              Pacjent <br /><br />
              Lekarz <br /><br />
              Dodatkowe informacje
            </div>
          </div>
        </div>
      );
    }
    
    export default VisitsReception;