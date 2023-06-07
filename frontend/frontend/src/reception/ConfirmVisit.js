import Modal from '../UI/Modal'
import { Fragment } from 'react';

function ConfimVisit(props) {
    
    const didSubmitModalContent = <Fragment>
        <div className='alert'>
            <h2>Potwierdzenie wizyty</h2>
            <span>Data: </span>
            <span>Pacjent: </span>
            <span>Lekarz: </span>
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
    
    export default ConfimVisit;