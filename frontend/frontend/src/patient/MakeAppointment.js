import styles from "./MakeAppointment.module.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import React, { useState, useEffect, useCallback } from "react";
import TimePicker from "./TimePicker";
import SuccessSubmit from "./SuccessSubmitAppointment";
import { Form, useParams } from "react-router-dom";

function MakeAppointmentPage() {
  const params = useParams();

  const formatDate = useCallback((date) => {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  },[])

  const [succesIsShown, setSuccesIsShown] = useState(false);
  const [succData, setDataSucc] = useState("");
  const [crewFetch, setCrew] = useState([]);
  const [visitsFetch, setVisits] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoc, setDoc] = useState(params.id);
  const [selectedDesc, setDesc] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dataValid, setDataValid] = useState(false);

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  const handleDescription = (event) => {
    setDesc(event.target.value);
  };
  const handleDoctorChange = (event) => {
    setDoc(event.target.value);
  };

  useEffect(() => {
    fetch(
      "http://127.0.0.1:8000/auth/users/?email=&is_staff=true&is_receptionist=false&is_active=true",
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
        setCrew(data);
      });
  }, []);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/visits/visits?date=&patient=&doctor=${selectedDoc}`,
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
        setVisits(data);
      });
  }, [selectedDoc]);
  console.log(visitsFetch);
  useEffect(() => {
    const date = formatDate(selectedDate) + "T" + selectedTime + ":00";
    var bool;
    if (visitsFetch.length > 0) {
      bool = visitsFetch.map((element) => {
        console.log(element.date)
        console.log(date)
        return element.date === date;
      });
    }
    setDataValid(bool);
  }, [visitsFetch, selectedDate, selectedTime, formatDate]);

  console.log(dataValid);

  const isValid = () => {
    if (dataValid) {
      const bool = dataValid.find(element => element === true)
        return (selectedDoc > 0 & !bool);
      
      
    }
    return false;
  };
  console.log(dataValid)

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  

  const showSuccesHandler = (event) => {
    event.preventDefault();
    setDataSucc(formatDate(selectedDate));
    const data = {
      date: formatDate(selectedDate) + "T" + selectedTime + ":00Z",
      description: selectedDesc,
      is_confirmed: false,
      patient: localStorage.getItem("owner"),
      doctor: selectedDoc,
      recommendation: null,
    };
    console.log(data);
    const response = fetch("http://127.0.0.1:8000/visits/visits", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 422 || response.status === 401 ) {
      return response;
    } 
      setSuccesIsShown(true);
    
      
    
  };
  const hideSuccesHandler = () => {
    setSuccesIsShown(false);
    console.log("dodano wizyte");
  };
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.h1_}>Zarejestruj wizytę</h1>
      </div>
      {crewFetch && (
        <Form method="post">
          <div className={styles.body}>
            <div className={styles.left}>
              <h2 className={styles.h2_}>Wybierz Lekarza</h2>
              <select
                className={styles.doctors}
                value={selectedDoc}
                onChange={handleDoctorChange}
                id="doctors"
              >
                <option value="">Wybierz opcję</option>
                {crewFetch.map((doctor) => (
                  <option value={doctor.id} key={doctor.id}>
                    {doctor.first_name +
                      " " +
                      doctor.last_name +
                      ", " +
                      doctor.specialization}
                  </option>
                ))}
              </select>
              <h2 className={styles.h2_}>Opis dolegliwości</h2>
              <textarea
                id="issues"
                name="issues"
                rows="10"
                cols="80"
                onChange={handleDescription}
              ></textarea>
            </div>
            <div className={styles.right}>
              <h2 className={styles.h2_}>Kalendarz</h2>
              {/* <Calendar/> */}
              <div className={styles.date}>
                <TimePicker onChange={handleTimeChange} value={selectedTime} />
                <Calendar onChange={handleDateChange} value={selectedDate} />
                <p>
                  Wybrana data: {selectedDate.toDateString()} {selectedTime}
                </p>
                {dataValid && (
                  <div>
                    {dataValid.map(
                      (element) =>
                        element && (
                          <p>
                            Podana data i godzina są zajęte wybierz ponownie
                          </p>
                        )
                    )}
                  </div>
                )}
                {!selectedDoc && <p>Proszę wybrać doktora</p>}
                {!selectedTime && !selectedDate && <p>Proszę wybrać datę</p>}
              </div>
              {succesIsShown && (
                <SuccessSubmit
                  onHideCart={hideSuccesHandler}
                  dataSuc={succData}
                  timeSuc={selectedTime}
                />
              )}
              <button
                disabled={!isValid()}
                type="submit"
                className={styles.primary_btn_submit}
                onClick={showSuccesHandler}
              >
                Zatwierdź
              </button>
            </div>
          </div>
        </Form>
      )}
    </div>
  );
}

export default MakeAppointmentPage;
