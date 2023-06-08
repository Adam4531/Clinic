import Modal from '../UI/Modal'
import { Fragment, useState } from 'react';
// import { json } from "react-router-dom";
import ErrorUp from '../UI/ErrorUp'

function SuccessDoctor(props) {
  const [errorIsShown, setErrorIsShown]=useState(false);
  const hideErrorHandler = () =>{
    setErrorIsShown(false);
    console.log('dziala')
  }


    const onSubmit = async() =>{
        const data = {
            first_name: props.doctor.first_name,
            last_name: props.doctor.last_name,
            pesel: props.doctor.pesel,
            email: props.doctor.email,
            password: props.doctor.password,
            is_staff: true,
            is_receptionist: false,
            specialization: props.doctor.specialization
          };
        console.log(data)
        const response = await fetch("http://127.0.0.1:8000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
      body: JSON.stringify(data),
    });
    
    
    if(!response.ok){
      setErrorIsShown(true)
    }else{
      props.onHideCart()
    }
    
    }
    const didSubmitModalContent = <Fragment>
        <div className='alert'>
            <h2>Czy podane dane są prawidłowe?</h2>
            <span>Imię: {props.doctor.first_name}</span>
            <span>Nazwisko:  {props.doctor.last_name}</span>
            <span>PESEL:  {props.doctor.pesel}</span>
            <span>Specjalizacja:  {props.doctor.specialization}</span>
            <button className='btn_confirm' onClick={onSubmit}>OK</button>
        </div>
</Fragment>
    return (
        <>
        <Modal onClose={props.onHideCart}>
        {didSubmitModalContent}
        </Modal>
        {errorIsShown && <ErrorUp onHideCart={hideErrorHandler}/>}
        </>
      );
    }
    
    export default SuccessDoctor;