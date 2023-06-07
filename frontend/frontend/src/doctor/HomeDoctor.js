import styles from "./HomeDoctor.module.css";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import React, { useEffect, useState } from "react";
import AddRecc from "./AddRecc";



function HomeDoctor() {
  const [succesIsShown, setSuccesIsShown]=useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [visitFetched, setVisit] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  }

  useEffect(()=>{
    const date = formatDate(selectedDate)
    fetch(`http://127.0.0.1:8000/visits/visits?date=${date}&patient=&doctor=${localStorage.getItem(
      "owner"
    )}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
    }).then((res) => res.json())
    .then((data) => {setVisit(data)})
  },[selectedDate])

  const showSuccesHandler = (event) =>{
    event.preventDefault();
    setSuccesIsShown(true);
  }
  const hideSuccesHandler = () =>{
    setSuccesIsShown(false);
    console.log('dodano wizyte')
  }
  console.log(visitFetched)
  return (
    
    <div className={styles.container}>
      {/* {succesIsShown && <AddRecc onHideCart={hideSuccesHandler}/>} */}
      <form>
        <div className={styles.body}>
          <div className={styles.left}>
            <h2 className={styles.h2_}>Dzisiejsze wizyty</h2>
            <div className={styles.body}>
              <div className={styles.upcoming}>
                {visitFetched.map((data)=>(
                  <div className={styles.upcoming_visit}>
                  <span className={styles.date}>Data: {data.date}</span>
                  <span className={styles.doctor}>Pacjent: {data.patient.first_name} {data.patient.last_name}</span>
                   <button onClick={showSuccesHandler}  className={styles.details}>Dodaj zalecenie</button>
                  {succesIsShown && <AddRecc onHideCart={hideSuccesHandler} visit={data}/>}
                </div>
                ))}
                
              </div>
            </div>
            <form>
              <button type="submit" className={styles.primary_btn_submit}>
                Generuj listę wizyt
              </button>
            </form>
          </div>
          <div className={styles.right}>
            <h2 className={styles.h2_}>Kalendarz</h2>
            <Calendar onChange={handleDateChange} value={selectedDate} />
            <p>
                  Wybrana data: {selectedDate.toDateString()}
                </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default HomeDoctor;
