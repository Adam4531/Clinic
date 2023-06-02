import styles from "./MakeAppointment.module.css";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import React, { useState, useEffect } from "react";
import TimePicker from "./TimePicker";
import SuccessSubmit from "./SuccessSubmitAppointment";
import { Form } from "react-router-dom";

function MakeAppointmentPage() {
  const [succesIsShown, setSuccesIsShown]=useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [visitFetch, setVisit] = useState([]);
  const [crewFetch, setCrew] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/employees/employees', {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCrew(data);
      })
    fetch(
      `http://127.0.0.1:8000/visits/visits`,
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
        console.log(data);
        setVisit(data)
      });
  }, []);

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
          {crewFetch && <Form method="post">
          <div className={styles.body}>
            <div className={styles.left}>
                <h2 className={styles.h2_}>Wybierz Lekarza</h2>
                <select className={styles.doctors} id="doctors" name="doctor">
                  {crewFetch.map((doctor)=>(
                    <option value={doctor.url} key={doctor.id}>{doctor.user}</option>
                  ))}
                  
                </select>
                <h2 className={styles.h2_}>Opis dolegliwości</h2>
                <textarea id="issues" name="issues" rows="10" cols="80"></textarea>
            </div>
            <div className={styles.right}>
              <h2 className={styles.h2_}>Kalendarz</h2>
              {/* <Calendar/> */}
              <div className={styles.date}>
                <TimePicker/>
                <Calendar onChange={handleDateChange} value={selectedDate}/>
                <p>Wybrana data: {selectedDate.toDateString()}</p>
              </div>
              {succesIsShown && <SuccessSubmit onHideCart={hideSuccesHandler}/>}
                <button type="submit" className={styles.primary_btn_submit} onClick={showSuccesHandler}>Zatwierdź</button>
            </div> 
          </div>
          </Form>}
        </div>
    );
}

export default MakeAppointmentPage;