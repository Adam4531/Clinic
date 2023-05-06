import styles from "./AuthModule.css";

function LoginPage() {
  return (
    <div className="container">
    <div className="login">
    <h3>Zaloguj się</h3>
    <form>
      <input type="text" id="email-input" name="email" placeholder="Wpisz e-mail..."></input>
      <input type="password" id="passwd-input" name="passwd" placeholder="Wpisz hasło..."></input>
      <button id="btn_forgotten_passwd">Zapomniałem hasła</button>
      <button id="btn_submit">Zaloguj</button>
    </form>
  </div>  
  </div>
);
}
    
    export default LoginPage;