import React from "react";
import logo from "./logo.svg";
import styles from "./Navbar.module.css";
import { Form, NavLink, useLoaderData } from 'react-router-dom';
import RecommendationsPage from "../patient/Recommendations";
import { Route } from 'react-router-dom';

const Navbar = props => {
  
  return (
    <nav className={styles.navbar} style={{ backgroundColor: "#014FA1" }}>
      <div className={styles["navbar-logo"]}>
      <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
      </div>
      <div className={styles["navbar-options"]}>
        <div className={styles["navbar-option"]}>
        <NavLink
              to="/crew"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Zespół
            </NavLink>
        </div>
        <div className={styles["navbar-option"]}>
        <NavLink
              to="/appointments-register"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Zarejestruj wizytę
            </NavLink>
        </div>
        <div className={styles["navbar-option"]}>
        <NavLink
              to="/visits"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Lista wizyt
            </NavLink>
            
        </div>
        <div className={styles["navbar-option"]}>
          {/* <NavLink
              to="/recommendations"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Lista zaleceń
            </NavLink> */}
            <Route path="/recommendations">
                <RecommendationsPage onModaleShow={props.showModalHandler} />
            </Route>
        </div>
      </div>
      <div className={styles["navbar-buttons"]}>
      <NavLink to="/auth"><button className={styles["btn-register"]}>Zarejestruj się</button></NavLink>
      <NavLink to="/auth"><button className={styles["btn-login"]}>Zaloguj się</button></NavLink>
      </div>
    </nav>
  );
};

export default Navbar;