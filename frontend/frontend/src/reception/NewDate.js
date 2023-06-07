import Modal from '../UI/Modal'
import { Fragment, useState } from 'react';
import { Form } from "react-router-dom";
function NewDate(props) {
    const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handletHourChange = (event) => {
    setHour(event.target.value);
  };
    const onSubmit = () =>{
        const data = {
            date: date + "T" + hour + ":00Z"
        }
        console.log(data)
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
            props.onHideCart()
        }
      })
      .catch((error) => {
        console.log(error);
      });
        
    }
    
    const didSubmitModalContent = <Fragment>
        <div className='alert'>
            <h2>Nowa data i godzina</h2>
            <Form method="post" >
          <p>
            <label htmlFor="drugs">Data</label>
            <input
              id="drugs"
              type="date"
              value={date}
              onChange={handleDateChange}
              required
            />
          </p>
          <p>
            <label htmlFor="code">Godzina</label>
            <input
              id="code"
              type="time"
              min="09:00" max="17:00"
              value={hour}
              onChange={handletHourChange}
              required
            />
          </p>
        </Form>
            <button className='btn_confirm' onClick={onSubmit}>OK</button>
        </div>
</Fragment>
console.log(props.visit)
    return (
        <>
        <Modal onClose={props.onHideCart}>
        {didSubmitModalContent}
        </Modal>
        </>
      );
    }
    
    export default NewDate;