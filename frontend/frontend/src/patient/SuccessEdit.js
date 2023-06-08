import Modal from '../UI/Modal'
import { Fragment } from 'react';

function SuccessEdit(props) {
    
    const didSubmitModalContent = <Fragment>
    <p>Dane edytowano poprawnie!</p>
    <div >
        <button  onClick={props.onHideCart}>OK</button>
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
    
    export default SuccessEdit;