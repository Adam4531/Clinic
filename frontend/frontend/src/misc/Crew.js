import styles from "./CrewStyles.css";
import { useState, useEffect } from 'react';

function CrewPage() {
  const [crewFetch, setCrew] = useState([]);
  useEffect(() => {
    // Fetch the Payroll Data related to the logged in User
    fetch('http://127.0.0.1:8000/employees/employees', {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCrew(data);
      });
      
  }, []);
  console.log(crewFetch)
 return (
        <div className="container">
          <div className="first_row">
          <div className="tile" id="doctor1">
            <img src={require("../assets/doc1.png")} alt="Doctor #1"></img>
            <div className="desc">
              <span className="head">Tytuł</span>
              <span className="subhead">Subhead</span>
              <span className="doc_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
            </div>
          </div>
          {/* <div className="tile" id="doctor2">
            <img src={require("../assets/doc2.png")} alt="Doctor #2"></img>
            <div className="desc">
              <span className="head">Tytuł</span>
              <span className="subhead">Subhead</span>
              <span className="doc_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
            </div>
          </div>
          <div className="tile" id="doctor3">
           <img src={require("../assets/doc3.png")} alt="Doctor #3"></img>
           <div className="desc">
              <span className="head">Tytuł</span>
              <span className="subhead">Subhead</span>
              <span className="doc_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
            </div>
          </div> */}
          </div>
          <div className="second_row">
          <div className="tile" id="doctor4">
            <img src={require("../assets/doc4.png")} alt="Doctor #4"></img>
            <div className="desc">
              <span className="head">Tytuł</span>
              <span className="subhead">Subhead</span>
              <span className="doc_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
            </div>
          </div>
          <div className="tile" id="doctor5">
            <img src={require("../assets/doc5.png")} alt="Doctor #5"></img>
            <div className="desc">
              <span className="head">Tytuł</span>
              <span className="subhead">Subhead</span>
              <span className="doc_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
            </div>
          </div>
          </div>
        </div>
      );
    }
    
    export default CrewPage;