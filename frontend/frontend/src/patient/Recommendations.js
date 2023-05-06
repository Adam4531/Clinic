import styles from "./Recommendations.module.css";

function RecommendationsPage(props) {
    return (
        <div className={styles.container}>
          <div>
            <h1 className={styles.h1_}>Zalecenia</h1>
          </div>
          <div className={styles.body}>
            <div className={styles.recommendations}>
              <h2 className={styles.h2_}>Lista zaleceń</h2>
              <div className={styles.recommendation}>
                <span className={styles.rec_info}>Data:</span>
                <span className={styles.rec_info}>Lekarz:</span>
              </div>
              <div className={styles.recommendation}>
                <span className={styles.rec_info}>Data:</span>
                <span className={styles.rec_info}>Lekarz:</span>
              </div>
              <div className={styles.recommendation}>
                <span className={styles.rec_info}>Data:</span>
                <span className={styles.rec_info}>Lekarz:</span>
              </div>
              <div className={styles.recommendation}>
                <span className={styles.rec_info}>Data:</span>
                <span className={styles.rec_info}>Lekarz:</span>
              </div>
              <div className={styles.recommendation}>
                <span className={styles.rec_info}>Data:</span>
                <span className={styles.rec_info}>Lekarz:</span>
              </div>
              <div className={styles.recommendation}>
                <span className={styles.rec_info}>Data:</span>
                <span className={styles.rec_info}>Lekarz:</span>
              </div>
              <div className={styles.recommendation}>
                <span className={styles.rec_info}>Data:</span>
                <span className={styles.rec_info}>Lekarz:</span>
              </div>
            </div>
            <div className={styles.details}>
              <h2 className={styles.h2_}>Szczegóły wybranego zalecenia</h2>
              <span className={styles.rec_info}>Leki i dawkowanie:</span>
              <span className={styles.rec_info}>Kod recepty:</span>
              <span className={styles.rec_info}>Zalecenia zmiany stylu życia:</span>
              <span className={styles.rec_info}>Skierowania do specjalisty:</span>
            </div>
          </div>
        </div>
      );
    }
    
    export default RecommendationsPage;