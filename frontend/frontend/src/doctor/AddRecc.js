import { Form } from "react-router-dom";
import React, { useState } from "react";
import Modal from "../UI/Modal";
import { Fragment } from "react";
import classes from "./AddRecc.module.css";
import ErrorUp from "./ErrorUp";

function AddRecc(props) {
  const [prescription_code, setPrescription_code] = useState("");
  const [description, setDescription] = useState("");
  const [dosage, setDosage] = useState("");
  const [additional_information, setAdditional_information] = useState("");

  const [succesIsShown, setSuccesIsShown] = useState(false);

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
    setSuccesIsShown(false);
    console.log('dziala')
  }

  const submitForm = async () => {
    const data = {
      prescription_code: prescription_code,
      description: description,
      dosage: dosage,
      additional_information: additional_information,
      patient: props.visit.patient.id,
      visit: props.visit.id,
      doctor: props.visit.doctor.id
  }


  
  const response = await fetch("http://127.0.0.1:8000/visits/recomendations", {
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
    if(!response.ok){
      setSuccesIsShown(true)
      return response;
    }else{
      props.onHideCart() 
    }
    
  };

  const didSubmitModalContent = (
    <Fragment>
      <div className="alert">
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
  console.log(props.visit);
  return (
    <>
      <Modal onClose={props.onHideCart}>{didSubmitModalContent}</Modal>
      {succesIsShown && <ErrorUp onHideCart={hideErrorHandler}/>}
    </>
  );
}

export default AddRecc;
