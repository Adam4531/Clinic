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
        <>
        {succesIsShown && <SuccessEdit onHideCart={hideSuccesHandler}/>}
        <button  onClick={showSuccesHandler}>Edytuj</button>
        </>
      );
    }
    
    export default EditProfilePage;