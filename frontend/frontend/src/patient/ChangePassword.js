import { useState } from "react";
import SuccessEdit from "./SuccessEdit";
import styles from "./EditProfile.module.css";
import ErrorUp from "../UI/ErrorUp";

/* Zmiana hasła */
function ChangePassword(props) {
    const [succesIsShown, setSuccesIsShown]=useState(false);
    const [errorIsShown, setErrorIsShown]=useState(false);

    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [repeatPass, setRepeatPass] = useState('');

    
    const handleOldPassSet = (event) => {
        setOldPass(event.target.value);
    }
    const handleNewPassSet = (event) => {
        setNewPass(event.target.value);
    }
    const handleRepeatPassSet = (event) => {
        setRepeatPass(event.target.value);
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
      const showSuccesHandler = async(event) => {
        event.preventDefault();
        const data = {
            email: localStorage.getItem('email'),
            password: oldPass,
            new_password: newPass,
            new_password2: repeatPass
        };
        fetch('http://127.0.0.1:8000/auth/change-password', {
                method: "PUT",
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
              return response;
            }
            else{
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
                <h3 className={styles.h3}>Zmień hasło</h3>
                <form> 
                    <input className={styles.change_input} onChange={handleOldPassSet} type="password" id="old" name="old" placeholder="Stare hasło" />
                    <input className={styles.change_input} onChange={handleNewPassSet} type="password" id="new" name="new" placeholder="Nowe hasło" />
                    <input className={styles.change_input} onChange={handleRepeatPassSet} type="password" id="repeat" name="repeat" placeholder="Powtórz nowe hasło" />
                </form>
                {succesIsShown && <SuccessEdit onHideCart={hideSuccesHandler}/>}
              {errorIsShown && <ErrorUp onHideCart={hideErrorHandler}/>}
              <button className={styles.btn_save_changes} onClick={showSuccesHandler}>Zapisz</button>
            </div>
        </div>
    );
}

export default ChangePassword;