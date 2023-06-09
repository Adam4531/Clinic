import Modal from '../UI/Modal'
import { Fragment } from 'react';

function ErrorUp(props) {
    
    const didSubmitModalContent = <Fragment>
    <p>Ta wizyta ma już zalecenia możesz je edytować w zakładce Historia zaleceń</p>
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
    
    export default ErrorUp;