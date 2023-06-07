import Modal from '../UI/Modal'
import { Fragment } from 'react';

function ErrorUp(props) {
    
    const didSubmitModalContent = <Fragment>
    <p>Coś poszło nie tak!</p>
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