import styles from "./Recommendations.module.css";
import { useEffect, useState } from "react";

function RecommendationsDocPage(props) {
  const [rec, setRec] = useState([]);
  const [selectedRecIndex, setSelectedRecIndex] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/visits/recomendations`, {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
    })
    fetch(
      `http://127.0.0.1:8000/visits/recomendations`,
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
        setRec(data);
      });
  }, []);
console.log(rec)
  
  const handleRecommendationClick = (index) => {
    setSelectedRecIndex(index);
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.h1_}>Zalecenia</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.recommendations}>
          <h2 className={styles.h2_}>Lista zaleceń</h2>
          {/* trzeba pobrać dane z wizyt, ale backend się wysypał */}
          {rec.map((result, index) => (
            <div
              className={styles.recommendation}
              key={result.url}
              onClick={() => handleRecommendationClick(index)}
            >
              {/* <div className={styles.rec_info}>Data: {result.visit.date}</div> */}
              <div className={styles.rec_info}>
                Pacjent: {result.patient.first_name} {result.patient.last_name}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.details}>
          <h2 className={styles.h2_}>Szczegóły wybranego zalecenia</h2>
          {selectedRecIndex !== null && (
            <div>
              <div className={styles.rec_info}>
                Leki i dawkowanie: {rec[selectedRecIndex].dosage}
              </div>
              <div className={styles.rec_info}>
                Kod recepty: {rec[selectedRecIndex].prescription_code}
              </div>
              <div className={styles.rec_info}>
                Zalecenia zmiany stylu życia:{" "}
                {rec[selectedRecIndex].description}
              </div>
              <div className={styles.rec_info}>
                Skierowania do specjalisty:{" "}
                {rec[selectedRecIndex].additional_information}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecommendationsDocPage;
