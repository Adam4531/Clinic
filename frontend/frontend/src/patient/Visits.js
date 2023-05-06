import styles from "./Visits.module.css";

function VisitsPage() {
    return (
        <div className={styles.container}>
          <div>
            <h1 className={styles.h1_}>Lista wizyt</h1>
          </div>
          <div className={styles.body}>
            <div className={styles.upcoming}>
              <h2 className={styles.h2_}>Nadchodzące</h2>
              <div className={styles.upcoming_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
              <div className={styles.past_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
              <div className={styles.past_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
              <div className={styles.past_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
              <div className={styles.past_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
              <div className={styles.past_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
              <div className={styles.past_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
              <div className={styles.past_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
            </div>
            <div className={styles.past}>
              <h2 className={styles.h2_}>Przeszłe</h2>
              <div className={styles.past_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
              <div className={styles.past_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
              <div className={styles.past_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
              <div className={styles.past_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default VisitsPage;