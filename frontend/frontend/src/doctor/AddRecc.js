import { Form } from 'react-router-dom';
import Modal from '../UI/Modal'
import { Fragment } from 'react';
import classes from './AddRecc.module.css'
function AddRecc(props) {
    
    const didSubmitModalContent = <Fragment>
        <div className='alert'>
        <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="drugs">Leki i dawkowanie</label>
          <input id="drugs" type="text" name="drugs" required />
        </p>
        <p>
          <label htmlFor="code">Kod recepty</label>
          <input id="code" type="text" name="code" required/>
        </p>
       <p>
          <label htmlFor="changes">Zmiana stylu życia</label>
          <input id="changes" type="text" name="changes" required />
        </p>
        <p>
          <label htmlFor="skierowanie">Skierowanie do specjalisty</label>
          <input id="skierowanie" type="text" name="skierowanie" required />
        </p>
        
      </Form>
            <button className='btn_confirm' onClick={props.onHideCart}>Dodaj zalecenia</button>
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
    
    export default AddRecc;