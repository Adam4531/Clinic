import { Form, useSearchParams, useActionData, useNavigation } from 'react-router-dom';

// import classes from './AuthForm.module.css';
import classes from "./AuthModule.module.css";

function AuthForm() {
  const data = useActionData();

  const navigation = useNavigation() 
  const isSubmitting =navigation.state === 'submitting'

  const [SearchParams] = useSearchParams();
  const isLogin = SearchParams.get('mode') === 'login';
  
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
          {!isLogin && <input className={classes.input} title="Wymagany format: Pierwsza duża litera, pozostałe małe" pattern='[A-Z][a-z]+(?: [A-Z][a-z]+)?' type="text" id="first-input" name="first_name" placeholder="Wpisz imię..." required></input>}
          {!isLogin && <input className={classes.input} title="Wymagany format: Pierwsza duża litera, pozostałe małe" pattern='[A-Z][a-z]+(?:-[A-Z][a-z]+)?' type="text" id="last-input" name="last_name" placeholder="Wpisz nazwisko..." required></input>}
          {!isLogin && <input className={classes.input} title="Wymagany format: 11 cyfr" pattern='[0-9]{11}' type="text" id="last-input" name="pesel" placeholder="Wpisz pesel..." required></input>}
          <input className={classes.input} title="Przykład: example@example.ex" pattern='[A-Za-z0-9.-_]+@[a-z0-9]+.[a-z]{2,4}' type="text" id="email-input" name="email" placeholder="Wpisz e-mail..." required></input>
          <input className={classes.input} type="password" id="passwd-input" name="password" placeholder="Wpisz hasło..." required></input>
        
        
        <button id={classes.btn_submit} disabled={isSubmitting}>{isLogin ? 'Zaloguj' : 'Zarejestruj'}</button>
      </Form>
      </div>
      </div>
    </>
  );
}

export default AuthForm;