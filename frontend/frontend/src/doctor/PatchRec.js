import { Form } from "react-router-dom";
import React, { useState } from "react";
import Modal from "../UI/Modal";
import { Fragment } from "react";
import classes from "./PatchRec.module.css";
function PatchRec(props) {
  // const [prescription_code, setPrescription_code] = useState("");
  const [description, setDescription] = useState(props.visit.description);
  const [dosage, setDosage] = useState(props.visit.dosage);
  const [additional_information, setAdditional_information] = useState(props.visit.additional_information);

  // const handletPrescriptionChange = (event) => {
  //   setPrescription_code(event.target.value);
  // };
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
      prescription_code: props.visit.prescription_code,
      description: description,
      dosage: dosage,
      additional_information: additional_information,
      // patient: props.visit.patient.id,
      // visit: props.visit.id,
      // doctor: props.visit.doctor.id
  }
  console.log(data)
  console.log(`http://127.0.0.1:8000/visits/recomendations/${props.visit.id}`)
  const response = fetch(`http://127.0.0.1:8000/visits/recomendations/${props.visit.id}`, {
      method: "PATCH",
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
      window.location.reload(false);
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
                  <label>
                  Leki i dawkowanie
                  <input
                    id="drugs"
                    type="text"
                    defaultValue={props.visit.dosage}
                    onChange={handleDosageChange}
                    required
                    placeholder="Leki i dawkowanie"
                  />
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                <label>
                Zmiana stylu życia
                 <input
                    id="changes"
                    type="text"
                    defaultValue={props.visit.description}
                    onChange={handleDescription}
                    required
                    placeholder="Zmiana stylu życia"
                  />
                  </label>
                </td>
                <td>
                  <label>
                  Skierowanie do specjalisty
                  <input
                    id="skierowanie"
                    type="text"
                    defaultValue={props.visit.additional_information}
                    onChange={handleInfoChange}
                    required
                    placeholder="Skierowanie do specjalisty"
                  />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </Form>
        <button className="btn_confirm" onClick={submitForm}>
          Edytuj zalecenie
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

export default PatchRec;
