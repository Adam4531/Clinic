import styles from "./MakeAppointment.module.css";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar"
import React, { useState } from "react";
import TimePicker from "./TimePicker";
import SuccessSubmit from "./SuccessSubmitAppointment";

function MakeAppointmentPage() {
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
          <div>
            <h1 className={styles.h1_}>Zarejestruj wizytę</h1>
          </div>
          <form>
          <div className={styles.body}>
            <div className={styles.left}>
                <h2 className={styles.h2_}>Wybierz Lekarza</h2>
                <select className={styles.doctors} id="doctors" name="doctors">
                  <option value="doc1">Doktor #1</option>
                  <option value="doc2">Doktor #2</option>
                  <option value="doc3">Doktor #3</option>
                  <option value="doc4">Doktor #4</option>
                  <option value="doc5">Doktor #5</option>
                </select>
                <h2 className={styles.h2_}>Wybierz objawy</h2>
                <div className={styles.checkbox}>
                  <label className={styles.checkbox_container} for="cb1">
                    <input type="checkbox" id="cb1" name="symptoms" value="headache"></input>
                     Ból głowy
                  </label>
                  </div>
                  <div className={styles.checkbox}>
                  <label className={styles.checkbox_container} for="cb2">
                    <input type="checkbox" id="cb2" name="symptoms" value="fever"></input>
                     Gorączka
                  </label>
                </div>
                <form>
                  <input type="text" className={styles.new_symptom} id="new_symptom" placeholder="Wprowadź objaw..."></input>
                  <button type="submit" className={styles.secondary_btn_submit}>Dodaj</button>
                </form>
                {succesIsShown && <SuccessSubmit onHideCart={hideSuccesHandler}/>}
                <button type="submit" className={styles.primary_btn_submit} onClick={showSuccesHandler}>Zatwierdź</button>
              
            </div>
            <div className={styles.right}>
              <h2 className={styles.h2_}>Kalendarz</h2>
              {/* <Calendar/> */}
              <div className={styles.date}>
                <TimePicker/>
                <Calendar onChange={handleDateChange} value={selectedDate}/>
                <p>Wybrana data: {selectedDate.toDateString()}</p>
              </div>
            </div> 
          </div>
          </form>
        </div>
    );
}

export default MakeAppointmentPage;