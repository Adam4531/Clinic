import styles from "./HomePage.css";

function LoginForm () {
    return (
        <div className="login">
        <h3>Zaloguj się</h3>
        <form>
          <input type="text" id="email-input" name="email" placeholder="Wpisz e-mail..."></input>
          <input type="password" id="passwd-input" name="passwd" placeholder="Wpisz hasło..."></input>
          <button id="btn_forgotten_passwd">Zapomniałem hasła</button>
          <button id="btn_submit">Zaloguj</button>
        </form>
      </div>  
    );
}

export default LoginForm;