import { useState, useTransition, useEffect } from "react";
import SuccessEdit from "./SuccessEdit";
import styles from "./EditProfile.module.css";
import ErrorUp from "../UI/ErrorUp";

function EditProfilePage(props) {  
  const [succesIsShown, setSuccesIsShown]=useState(false);
  const [errorIsShown, setErrorIsShown]=useState(false);

  // Dane do pobrania:
  const [email, setEmail] = useState('');
  const [pesel, setPesel] = useState('');
  const [phone, setPhone] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [allergies, setAllergies] = useState([]);
  const [drugs, setDrugs] = useState('');
  const [date_of_birth, setDateOfBirth] = useState('');

  // Pobieranie danych:
  const handleEmailChange = (event) =>{
    setEmail(event.target.value);
  };
  const handlePeselChange = (event) =>{
    setPesel(event.target.value);
  };
  const handlePhoneChange = (event) =>{
    setPhone(event.target.value);
  };
  const handleFnameChange = (event) =>{
    setFname(event.target.value);
  };
  const handleLnameChange = (event) =>{
    setLname(event.target.value);
  };
  const handleAllergiesChange = (event) =>{
    setAllergies(event.target.value);
  };
  const handleDrugsChange = (event) =>{
    setDrugs(event.target.value);
  };
  const handleBirthChange = (event) =>{
    setDateOfBirth(event.target.value);
  }

  const hideSuccesHandler = () =>{
    setSuccesIsShown(false);
    console.log('dziala')
  }
  const hideErrorHandler = () =>{
    setErrorIsShown(false);
    console.log('dziala')
  }

  const showErrorHandler = (event) => {
    event.preventDefault();
    setErrorIsShown(true);
  } 

  const [user, setUser] = useState("");
  useEffect(() => {
    fetch('http://127.0.0.1:8000/auth/user/',
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            SameSite: "none",
          },
      })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setEmail(data.email)
        setPesel(data.age);
        setFname(data.first_name);
        setLname(data.last_name);
        setPhone(data.phone_number);
        setDateOfBirth(data.date_of_birth);
        setAllergies(data.allergies);
        console.log(data);
      });
  }, []);

  //BAD REQUEST(400)
  const showSuccesHandler = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      first_name: fname,
      last_name: lname,
      phone_number: phone,
      allergies: allergies
    };
    console.log(data)
    fetch(`http://127.0.0.1:8000/auth/users/${localStorage.getItem("owner")}`,
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
      } 
      if(!response.ok){
        setErrorIsShown(true)
        return response
      }else{
        setSuccesIsShown(true);
      }
        
      
    })
    .catch((error) => {
      console.log(error);
    });
  } 

    return (
        <div className={styles.container}>
          <div className={styles.edit_profile_window}>
            <form>
              <h3 className={styles.h3}>Profil</h3>
              <table className={styles.table}>
                <tbody>
                <tr>
                <td>
                    <input defaultValue={user.first_name} title="Wymagany format: 1 duża litera, pozostałe małe" pattern='[A-Z][a-z]+(?: [A-Z][a-z]+)?' type="text" id="name-input" name="name" onChange={handleFnameChange} placeholder="Imię"></input>
                  </td>
                  <td>
                    <input defaultValue={user.last_name} title="Wymagany format: 1 duża litera, pozostałe małe" pattern='[A-Z][a-z]+(?:-[A-Z][a-z]+)?' type="text" id="surname-input" name="surname" onChange={handleLnameChange} placeholder="Nazwisko"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input defaultValue={user.pesel} title="Wymagany format: 11 cyfr" pattern='[0-9]{11}' type="text" id="pesel-input" name="pesel" onChange={handlePeselChange} placeholder="PESEL" disabled></input>
                  </td>
                  <td>
                    <input defaultValue={user.email} title="Przykład: example@example.ex" pattern='[A-Za-z0-9.-_]+@[a-z0-9]+.[a-z]{2,4}' type="text" id="email-input" name="email" onChange={handleEmailChange} placeholder="Email"></input>
                  </td>
                  {/* <td>
                    <input defaultValue={user.date_of_birth} type="text" id="birth-input" name="birth" onChange={handleBirthChange} placeholder="Data urodzenia" disabled></input>
                  </td> */}
                </tr>
                <tr>
                  <td>
                    <input defaultValue={user.phone_number} title="Wymagany format: 9 cyfr" pattern='[0-9]{9}' type="text" id="phone-input" name="phone" onChange={handlePhoneChange} placeholder="Numer telefonu"></input>
                  </td>
                  <td>
                    <input defaultValue={user.allergies} type="text" id="allergies-input" name="allergies" onChange={handleAllergiesChange} placeholder="Alergie"></input>
                  </td>
                </tr>
                {/* <tr>
                  <td>
                    <input type="text" id="drugs-input" name="drugs" onChange={handleDrugsChange} placeholder="Stosowane leki"></input>
                  </td>
                </tr> */}
                </tbody>
              </table>
              {succesIsShown && <SuccessEdit onHideCart={hideSuccesHandler}/>}
              {errorIsShown && <ErrorUp onHideCart={hideErrorHandler}/>}
              <button className={styles.btn_save_changes} onClick={showSuccesHandler}>Zapisz</button>
            </form>
          </div>
        </div>
      );
}
    
export default EditProfilePage;