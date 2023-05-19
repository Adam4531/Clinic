import { useState } from "react";
import SuccessEdit from "./SuccessEdit";

function EditProfilePage(props) {  
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
          <div className="edit_profile_window">
            <form>
              <h3>Profil</h3>
              <table>
                <tr>
                  <td>
                    <input type="text" id="email-input" name="email" placeholder="Email"></input>
                  </td>
                  <td>
                    <input type="text" id="age-input" name="age" placeholder="Wiek"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="password" id="passwd-input" name="passwd" placeholder="Hasło"></input>
                  </td>
                  <td>
                    <input type="text" id="phone-input" name="phone" placeholder="Numer telefonu"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" id="name-input" name="name" placeholder="Imię"></input>
                  </td>
                  <td>
                    <input type="text" id="surname-input" name="surname" placeholder="Nazwisko"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" id="allergies-input" name="allergies" placeholder="Alergie"></input>
                  </td>
                  <td>
                    <input type="text" id="drugs-input" name="drugs" placeholder="Stosowane leki"></input>
                  </td>
                </tr>
              </table>
              {succesIsShown && <SuccessEdit onHideCart={hideSuccesHandler}/>}
              <button className="btn_save_changes" onClick={showSuccesHandler}>Zapisz</button>
            </form>
          </div>
        </div>
      );
}
    
export default EditProfilePage;