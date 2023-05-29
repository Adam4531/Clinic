import styles from "./HomeDoctor.module.css";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { NavLink} from 'react-router-dom';
import AddRecc from "./AddRecc";

// function DateTimePickerExample() {
//   const [date, setDate] = useState(new Date());

//   const handleDateChange = (newDate) => {
//     setDate(newDate);
//   };
// }

function HomeDoctor() {
  const [succesIsShown, setSuccesIsShown]=useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
      <form>
        <div className={styles.body}>
          <div className={styles.left}>
            <h2 className={styles.h2_}>Dzisiejsze wizyty</h2>
            <div className={styles.body}>
              <div className={styles.upcoming}>
                <div className={styles.upcoming_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
                  <button onClick={showSuccesHandler} className={styles.details}>Dodaj zalecenie</button>
                </div>
                <div className={styles.upcoming_visit}>
                  <span className={styles.date}>Data: </span>
                  <span className={styles.doctor}>Lekarz: </span>
                  <button onClick={showSuccesHandler} className={styles.details}>Dodaj zalecenie</button>
                </div>
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
            <Calendar/>
          </div>
        </div>
      </form>
    </div>
  );
}

export default HomeDoctor;
