import { Form } from "react-router-dom";
import React, { useState } from "react";
import Modal from "../UI/Modal";
import { Fragment } from "react";
import classes from "./AddRecc.module.css";
function AddRecc(props) {
  const [prescription_code, setPrescription_code] = useState("");
  const [description, setDescription] = useState("");
  const [dosage, setDosage] = useState("");
  const [additional_information, setAdditional_information] = useState("");

  const handletPrescriptionChange = (event) => {
    setPrescription_code(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleDosageChange = (event) => {
    setDosage(event.target.value);
  };
  const handleInfoChange = (event) => {
    setAdditional_information(event.target.value);
  };
  const submitForm = () => {
    const data = {
      prescription_code: prescription_code,
      description: description,
      dosage: dosage,
      additional_information: additional_information,
      patient: props.visit.patient.id,
      visit: props.visit.id,
      doctor: props.visit.doctor.id
  }
  
  const response = fetch("http://127.0.0.1:8000/visits/recomendations", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 422 || response.status === 401) {
      return response;
    }else{
      props.onHideCart() 
    }
    
  };

  const didSubmitModalContent = (
    <Fragment>
      <div className="alert">
        <Form method="post" className={classes.form}>
          <p>
            <label htmlFor="drugs">Leki i dawkowanie</label>
            <input
              id="drugs"
              type="text"
              value={dosage}
              onChange={handleDosageChange}
              required
            />
          </p>
          <p>
            <label htmlFor="code">Kod recepty</label>
            <input
              id="code"
              type="text"
              value={prescription_code}
              onChange={handletPrescriptionChange}
              required
            />
          </p>
          <p>
            <label htmlFor="changes">Zmiana stylu życia</label>
            <input
              id="changes"
              type="text"
              value={description}
              onChange={handleDescription}
              required
            />
          </p>
          <p>
            <label htmlFor="skierowanie">Skierowanie do specjalisty</label>
            <input
              id="skierowanie"
              type="text"
              value={additional_information}
              onChange={handleInfoChange}
              required
            />
          </p>
        </Form>
        <button className="btn_confirm" onClick={submitForm}>
          Dodaj zalecenia
        </button>
      </div>
    </Fragment>
  );
  console.log(props.visit);
  return (
    <>
      <Modal onClose={props.onHideCart}>{didSubmitModalContent}</Modal>
    </>
  );
}

export default AddRecc;
