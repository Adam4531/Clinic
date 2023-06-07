import styles from "./DetailVisit.module.css";
import { useState, useEffect } from "react";
import SuccessCancel from "./SuccessCancel";
import { useParams, NavLink } from "react-router-dom";

function DetailVisitUpcoming(props) {
  const [succesIsShown, setSuccesIsShown] = useState(false);
  const [visitFetch, setVisit] = useState();
  const params = useParams();
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/visits/visits/${params.id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVisit(data);
      });
  }, [params]);
  console.log(visitFetch);

  const showSuccesHandler = () => {
    setSuccesIsShown(true);
  };
  const backHandler = ()=>{
    setSuccesIsShown(false);
    console.log("dziala");
  }
  const hideSuccesHandler = () => {
    fetch(`http://127.0.0.1:8000/visits/visits/${params.id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
    }).then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
    setSuccesIsShown(false);
    console.log("dziala");
  };
  return (
    <div className={styles.container}>
      {visitFetch && <div className={styles.detail_box}>
        <div className={styles.date}>Data: {visitFetch.date}</div>
        <div className={styles.doctor}>Lekarz: {visitFetch.doctor.first_name} {visitFetch.doctor.last_name}</div>
        <div className={styles.extra}>
          Dodatkowe informacje: {visitFetch.description}
        </div>
        <div className={styles.button_box}>
          <NavLink to="/visits" className={styles.btn_back}>
            Cofnij
          </NavLink>
          {succesIsShown && <SuccessCancel onHideCart={hideSuccesHandler} date={visitFetch.date} back={backHandler}/>}
          <button className={styles.btn_cancel} onClick={showSuccesHandler}>
            Anuluj wizytę
          </button>
        </div>
      </div>}
    </div>
  );
}

export default DetailVisitUpcoming;
