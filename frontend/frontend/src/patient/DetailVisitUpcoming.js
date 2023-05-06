import styles from "./DetailVisit.css";
import { useState } from "react";
import SuccessCancel from "./SuccessCancel";

function DetailVisitUpcoming(props) {
  const [succesIsShown, setSuccesIsShown]=useState(false);

  const showSuccesHandler = () =>{
    setSuccesIsShown(true);
  }
  const hideSuccesHandler = () =>{
    setSuccesIsShown(false);
    console.log('dziala')
  }
    return (
        <div className="container">
          <div className="details_box">
            <span class="date">
              Data:
            </span>
            <span className="doctor">
              Lekarz:
            </span>
            <span className="extra">
              Dodatkowe informacje:
            </span>
            <div className="button_box">
              <button className="btn_back">Cofnij</button>
              {succesIsShown && <SuccessCancel onHideCart={hideSuccesHandler}/>}
              <button className="btn_cancel" onClick={showSuccesHandler}>Anuluj wizytę</button>
            </div>
          </div>
        </div>
      );
    }
    
    export default DetailVisitUpcoming;