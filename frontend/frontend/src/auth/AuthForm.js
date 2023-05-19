import { Form, useActionData, useNavigation, useParams } from 'react-router-dom';

// import classes from './AuthForm.module.css';
import classes from "./AuthModule.css";

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
    <div className="container">
     <div className="login">
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Register'}</h1>
        {data && data.errors && <ul>  
            {Object.values(data.errors).map(error => <li key={error}>{error}</li>)}
          </ul>}
          {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" required />
        </p>
        {!isLogin && <p>
          <label htmlFor="email">Email</label>
          <input id="email-input" type="email" name="email" required/>
        </p>}
        {isLogin && <p>
          <label htmlFor="password">Password</label>
          <input id="passwd-input" type="password" name="password" required />
        </p>}
        {!isLogin && <p>
          <label htmlFor="password1">Repeat Password</label>
          <input id="passwd-input" type="password" name="password1" required />
        </p>}
        {!isLogin && <p>
          <label htmlFor="password2">Repeat Password</label>
          <input id="password2" type="password" name="password2" required />
        </p>}
        <button id="btn_forgotten_passwd">Zapomniałem hasła</button>
        <div className={classes.actions}>
          <button id="btn_submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting..' : 'Autoryzacja'}</button>
        </div>
      </Form>
      </div>
      </div>
    </>
  );
}

export default AuthForm;