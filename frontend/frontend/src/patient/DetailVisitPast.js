import styles from "./DetailVisit.css";

function DetailVisitPast() {
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
            <span className="control_visit">
              Data wizyty kontrolnej:
            </span>
            <span className="recommendations">
              Zalecenia:
            </span>
            <div className="button_box">
              <button className="btn_back">Cofnij</button>
            </div>
          </div>
        </div>
      );
    }
    
    export default DetailVisitPast;