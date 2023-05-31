import Modal from '../UI/Modal';
import { Fragment } from 'react';
import styles from "./Modal.css";

function SuccessCancel(props) {
    
    const didSubmitModalContent = <Fragment>
        <div className='alert'>
            <p>Wizyta dnia {props.date} zostanie anulowana!</p>
            <button className='btn_confirm' onClick={props.onHideCart}>OK</button>
            <button className='btn_confirm' onClick={props.back}>Anuluj</button>
        </div>
</Fragment>
console.log(props)
    return (
        <>
        <Modal onClose={props.back}>
        {didSubmitModalContent}
        </Modal>
        </>
      );
    }
    
    export default SuccessCancel;