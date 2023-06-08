
import Modal from '../UI/Modal'
import { Fragment } from 'react';

function ConfimVisit(props) {
    const onSubmit = () =>{
        const data = {
            is_confirmed: true
        }
        fetch(`http://127.0.0.1:8000/visits/visits/${props.visit.id}`,
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
        if (response.status === 422 || response.status === 401) {
          return response;
        } else {
            window.location.reload(false); //uboga wersja ale szybsza niż zmiana na zasadzie dać ten kod w /homerecipe bo kod musi się aktywować po potwierdzeniu że dane są okej na submit a nie od razu po odpaleniu popup'a
            props.onHideCart()
        }
      })
      .catch((error) => {
        console.log(error);
      });
        
    }
    
    const didSubmitModalContent = <Fragment>
        <div className='alert'>
            <h2>Potwierdzenie wizyty</h2>
            <span>Data: {props.visit.date}</span>
            <span>Pacjent: {props.visit.patient.first_name} {props.visit.patient.last_name}</span>
            <span>Lekarz: {props.visit.doctor.first_name} {props.visit.doctor.last_name}</span>
            <button className='btn_confirm' onClick={onSubmit}>OK</button>
        </div>
</Fragment>
    return (
        <>
        <Modal onClose={props.onHideCart}>
        {didSubmitModalContent}
        </Modal>
        </>
      );
    }
    
    export default ConfimVisit;