import Modal from '../UI/Modal'
import { Fragment } from 'react';

function SuccessSubmit(props) {
    
    const didSubmitModalContent = <Fragment>
        <div className='alert'>
            <p>Wizyta dnia {props.dataSuc} na godzinę: {props.timeSuc} została umówiona pomyślnie!</p>
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
    
    export default SuccessSubmit;