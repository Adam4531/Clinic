import { Form, useActionData, useNavigation, useParams } from 'react-router-dom';

// import classes from './AuthForm.module.css';
import classes from "./AuthModule.module.css";

function AuthForm() {
  const data = useActionData();

  const navigation = useNavigation() 
  const isSubmitting =navigation.state === 'submitting'

//   const [SearchParams] = useSearchParams();
  let isLogin = undefined
  const isAuth = useParams()
  if(isAuth.id === 'login'){
    isLogin = isAuth.id
  }
  
  return (
    <>
    <div className={classes.container}>
     <div className={isLogin ? classes.login : classes.register}>
      <Form method="post" className={classes.form}>
        <h3 className={classes.h3}>{isLogin ? 'Zaloguj się' : 'Zarejestruj się'}</h3>
        {data && data.errors && <ul>  
            {Object.values(data.errors).map(error => <li key={error}>{error}</li>)}
          </ul>}
          {data && data.message && <p>{data.message}</p>}
          <input type="text" id="username-input" name="username" placeholder="Wpisz login..." required></input>
        {!isLogin &&
          <input type="text" id="email-input" name="email" placeholder="Wpisz e-mail..." required></input>
        }
        {isLogin &&
          <input type="password" id="passwd-input" name="passwd" placeholder="Wpisz hasło..." required></input>
        }
        {!isLogin &&
          <input type="password" id="passwd-input1" name="passwd1" placeholder="Wpisz hasło ponownie..." required></input>
        }
        {!isLogin &&
          <input type="password" id="passwd-input2" name="passwd2" placeholder="Wpisz hasło ponownie..." required></input>
        }
        <button id={classes.btn_forgotten_passwd}>Zapomniałem hasła</button>
        <button id={classes.btn_submit} disabled={isSubmitting}>{isSubmitting ? 'Submitting..' : 'Autoryzacja'}</button>
      </Form>
      </div>
      </div>
    </>
  );
}

export default AuthForm;