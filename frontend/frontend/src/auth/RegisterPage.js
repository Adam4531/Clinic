import styles from "./AuthModule.css"

function RegisterPage () {
    return (
        <div className="container">
        <div className="register">
        <h3>Zarejestruj się</h3>
        <form>
          <input type="text" id="email-input" name="email" placeholder="Wpisz e-mail..."></input>
          <input type="password" id="passwd-input" name="passwd" placeholder="Wpisz hasło..."></input>
          <input type="text" id="first_name-input" name="first_name" placeholder="Wpisz imię..."></input>
          <input type="text" id="last_name-input" name="last_name" placeholder="Wpisz nazwisko..."></input>
          <input type="text" id="pesel-input" name="pesel" placeholder="Wpisz PESEL..."></input>
          <button id="btn_submit">Zarejestruj</button>
        </form>
      </div> 
      </div> 
    );
}

export default RegisterPage;