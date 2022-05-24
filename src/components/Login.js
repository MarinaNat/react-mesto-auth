import React, { useState } from "react";
// import { Link } from "react-router-dom";

const Login = ({onLogin}) => {
  const [login, setLogin] = useState({})

  function handleChange(event) {
    const { name, value } = event.target
    setLogin((prev) => ({
        ...prev,
        [name]: value
    }))
}

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setLogin({ ...login,[name]: value});
  // };

function handleSubmit(e) {
    e.preventDefault();
      onLogin( login.email, login.password)
    }


    // здесь обрабатываем вход в систему
  
    return (
      <div className="login">
        <p className="login__title">Вход</p>
        <form onSubmit={handleSubmit} className="login__form">
          <input
            className="login__input"
            required
            id="userEmail"
            name="email"
            type="email"
            value={login.email || ""}
            onChange={handleChange}
            placeholder="Email"
          />
          <span id="login-email-error" className="error"></span>
          <input
            className="login__input"
            required
            id="password"
            name="password"
            type="password"
            value={login.password || ""}
            onChange={handleChange}
            placeholder="Пароль"
            autoComplete="on"
          />
          <span id="login-password-error" className="error"></span>
          
            <button type="submit" className="login__button-container">
              Войти
            </button>
          
        </form>
      </div>
    );


}
// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userEmail: "",
//       password: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
  

export default Login;
