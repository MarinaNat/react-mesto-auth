import React from "react";
import { useLocation, Link } from "react-router-dom";
import headerLogo from "./../images/logo.svg";

function Header({email, onSignOut }) {
  // let {email, password} = userData || {};
  let location = useLocation();

  return (
    <header className="header">
      <a className="header__link" href="#">
        <img className="logo" src={headerLogo} alt="Логотипп" />
      </a>
      {location.pathname === '/' && (
        <div>
          <p className="header__user-email">{email}</p>
          <Link className="" to="/sign-in" onClick={onSignOut}>
            Выйти
          </Link>
        </div>
      ) }
      {location.pathname === '/sign-up' && (
            <Link className="" to="/sign-in">
              Войти
            </Link>
      )}
      {location.pathname === '/sign-in' && (
            <Link className="" to="/sign-up">
              Регистрация
            </Link>
      )}
    </header>
  );
}

export default Header;
