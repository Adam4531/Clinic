import Modal from '../UI/Modal';
import { Fragment } from 'react';
import styles from "./CancelVisit.css";

function SuccessCancel(props) {
    
    const didSubmitModalContent = <Fragment>
        <div className='cancel_alert'>
    <p>Wizyta dnia dd.mm.yyyy na godzinę XX:XX zostanie anulowana!</p>
        <button className='btn_confirm' onClick={props.onHideCart}>OK</button>
    </div>
</Fragment>
console.log(props)
    return (
        <>
        <Modal onClose={props.onHideCart}>
        {didSubmitModalContent}
        </Modal>
        </>
      );
    }
    
    export default SuccessCancel;