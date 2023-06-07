import { Form } from "react-router-dom";
import React, { useState } from "react";
import Modal from "../UI/Modal";
import { Fragment } from "react";
import classes from "./AddRecc.module.css";
import ErrorUp from "../UI/ErrorUp";
import { renderIntoDocument } from "react-dom/test-utils";


function AddRecc(props) {
  const [errorIsShown, setErrorIsShown]=useState(false);

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

  const hideErrorHandler = () =>{
    setErrorIsShown(false);
    console.log('dziala')
  }
  const submitForm = async() => {
    const data = {
      prescription_code: prescription_code,
      description: description,
      dosage: dosage,
      additional_information: additional_information,
      patient: props.visit.patient.id,
      visit: props.visit.id,
      doctor: props.visit.doctor.id
  }
  console.log(data)
  const  response = await fetch("http://127.0.0.1:8000/visits/recomendations", {
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
    }
    console.log(response)
  if(!response.ok){
    setErrorIsShown(true)
    return response
  }
  props.onHideCart() 

   
    
    
  };

  const didSubmitModalContent = (
    <Fragment>
      <div className="alert">
        <h2 className={classes.h2}>Dodaj zalecenia</h2>
        <Form method="post" className={classes.form}>
          <table className={classes.table}>
            <tbody>
              <tr>
                <td>
                  <input
                    id="drugs"
                    type="text"
                    value={dosage}
                    onChange={handleDosageChange}
                    required
                    placeholder="Leki i dawkowanie"
                  />
                </td>
                <td>
                  <input
                    id="code"
                    type="text"
                    value={prescription_code}
                    onChange={handletPrescriptionChange}
                    required
                    placeholder="Kod recepty"
                  />
                </td>
              </tr>
              <tr>
                <td>
                 <input
                    id="changes"
                    type="text"
                    value={description}
                    onChange={handleDescription}
                    required
                    placeholder="Zmiana stylu życia"
                  />
                </td>
                <td>
                  <input
                    id="skierowanie"
                    type="text"
                    value={additional_information}
                    onChange={handleInfoChange}
                    required
                    placeholder="Skierowanie do specjalisty"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Form>
        <button className={classes.btn_submit} onClick={submitForm}>
          Dodaj zalecenia
        </button>
      </div>
    </Fragment>
  );
  return (
    <>
      <Modal onClose={props.onHideCart}>{didSubmitModalContent}</Modal>
      {errorIsShown && <ErrorUp onHideCart={hideErrorHandler}/>}
    </>
  );
}

export default AddRecc;
