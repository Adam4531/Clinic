import styles from "./DetailVisit.css";
import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
function DetailVisitPast() {
  const [visitFetch, setVisit] = useState();
  const params = useParams();
  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/visits/visits/${params.id}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          SameSite: "none",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVisit(data)
      });
  }, [params]);
  console.log(visitFetch)
    return (
        <div className="container">
          {visitFetch && <div className="details_box">
            <span class="date">
               Data: {visitFetch.date}
            </span>
            <span className="doctor">
              Lekarz: {visitFetch.doctor.first_name} {visitFetch.doctor.last_name}
            </span>
            <span className="extra">
              Dodatkowe informacje: {visitFetch.description}
            </span>
            <span className="control_visit">
              Data wizyty kontrolnej: {visitFetch.visit_control}
            </span>
            <div className="button_box">
              <NavLink to='/visits' className="btn_back">Cofnij</NavLink>
            </div>
          </div>}
        </div>
      );
    }
    
    export default DetailVisitPast;