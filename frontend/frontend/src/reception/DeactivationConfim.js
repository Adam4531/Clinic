import Modal from '../UI/Modal'
import { Fragment, useState } from 'react';
import ErrorUp from '../UI/ErrorUp'

function DeactivationConfirm(props) {
  const [errorIsShown, setErrorIsShown]=useState(false);

  const hideErrorHandler = () =>{
    setErrorIsShown(false);
    console.log('dziala')
  }


    const onSubmit = async() =>{
        const data = {
            first_name: props.doctor.first_name,
            last_name: props.doctor.last_name,
            email: props.doctor.email,
            password: props.doctor.password,
            
          };
        console.log(data)
        const response = await fetch("http://127.0.0.1:8000/auth/deactivate", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
      body: JSON.stringify(data),
    });
    // wywala Uncaught i error mimo ze w innych miejscach działa i w response jest ok na false tutaj
    if (!response.ok) {
      setErrorIsShown(true)
    } else{
      props.onHideCart()
    }
    
    
    }
    
    const didSubmitModalContent = <Fragment>
        <div className='alert'>
            <h2>Czy napewno deaktywować?</h2>
            <span>Imię: {props.doctor.first_name}</span>
            <span>Nazwisko:  {props.doctor.last_name}</span>
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
    
    export default DeactivationConfirm;