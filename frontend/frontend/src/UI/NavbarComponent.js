import React, { useState } from "react";
import logo from "./logo.svg";
import styles from "./Navbar.module.css";
import { Form, NavLink, useLoaderData } from 'react-router-dom';

const Navbar = (props) => {
  const token = useLoaderData('root')
  const [toggle, toggleOptions] = useState(false)

  return (
    <nav className={styles.navbar} style={{ backgroundColor: "#014FA1" }}>
      <div className={styles["navbar-logo"]}>
      <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
      </div>
      <div className={styles["navbar-options"]}>
        <div className={styles["navbar-option"]}>
        {token && localStorage.getItem('is_employee') === 'false' && localStorage.getItem('is_receptionist') === 'false' && <NavLink
              to="/crew"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Zespół
            </NavLink>}
        </div>
        {token && localStorage.getItem('is_employee') === 'false' && localStorage.getItem('is_receptionist') === 'false' && <div className={styles["navbar-option"]}>
        <NavLink
              to="/appointments-register"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Zarejestruj wizytę
            </NavLink>
        </div>}
        {token && localStorage.getItem('is_employee') === 'false' && localStorage.getItem('is_receptionist') === 'false' && <div className={styles["navbar-option"]}>
        <NavLink
              to="/visits"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Lista wizyt
            </NavLink>
        </div>}
        {token && localStorage.getItem('is_employee') === 'false' && localStorage.getItem('is_receptionist') === 'false' && <div className={styles["navbar-option"]}>
          <NavLink
              to="/recommendations"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Lista zaleceń
            </NavLink>
        </div>}
        {token && localStorage.getItem('is_employee') === 'true' && localStorage.getItem('is_receptionist') === 'false' && <div className={styles["navbar-option"]}>
        <NavLink
              to="/doctor"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Panel lekarza
            </NavLink>
            {/* Potem będzie ukryte */}
        </div>}
        {token && localStorage.getItem('is_employee') === 'true' && localStorage.getItem('is_receptionist') === 'false' && <div className={styles["navbar-option"]}>
        <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Historia leczenia
            </NavLink>
        </div>}
        {token && localStorage.getItem('is_employee') === 'true' && localStorage.getItem('is_receptionist') === 'true' && <div className={styles["navbar-option"]}>
        <NavLink
              to="/homereception"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Strona główna
            </NavLink>
        </div>}
        {token && localStorage.getItem('is_employee') === 'true' && localStorage.getItem('is_receptionist') === 'true' && <div className={styles["navbar-option"]}>
        <NavLink
              to="/patients"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Historia leczenia
            </NavLink>
        </div>}
      </div>
      {!token && <div className={styles["navbar-buttons"]}>
      <NavLink to="/auth?mode=register"><button className={styles["btn-register"]}>Zarejestruj się</button></NavLink>
      <NavLink to="/auth?mode=login"><button className={styles["btn-login"]}>Zaloguj się</button></NavLink>
      </div>}
      {token && <div>
            <button className={styles["btn-profile"]} onClick={() => toggleOptions(!toggle)}>Profil</button>
            {toggle && (<div className={styles["option-list"]}>
              <Form action='/edit' method='post'>
                <button className={styles["btn-option"]}>Edytuj profil</button>
              </Form>
              <Form action='/changepassword' method='post'>
                  <button className={styles["btn-option"]}>Zmień hasło</button>
              </Form>
              <Form action='/logout' method='post'>
                <button className={styles["btn-option"]}>Wyloguj</button>
              </Form>
            </div>)}
      </div>}
    </nav>
  );
};

export default Navbar;