import React from "react";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage, goToHomePage } from "../../routes/coordinator.js";
import Logo from "../../assets/images/finclass-logo.png";
import Lock from "../../assets/images/lock.png";
import "../../assets/css/Login/LoginStyle.css";
import "../../assets/css/Login/Responsive.css";


const LoginPage = () => {

  const nagivate = useNavigate();

    return (
      <div className="login-page-container">
          <div className="form-container">
            <img src={Logo} onClick={() => goToHomePage(nagivate)} alt="Finclass Logo"/>
            <div className="login-title">
              <p>Acesse a maior plataforma de</p>
              <h1>Educação financeira do mundo!</h1>
            </div>
            <form className="login-form">
              <label>E-mail</label>
              <input 
                type="email"
                placeholder="Insira seu email"
                required
              />
              <label>Senha</label>
              <input 
                type="password"
                placeholder="Insira sua senha"
                required
              />
              <p className="forgot-password">
                Recuperar a senha
                <img src={Lock} alt="Forgot password icon" />
              </p>
              <button className="btn-login">Entrar</button>
              <p className="register">Ainda não tem conta?</p>
              <button className="btn-signup" onClick={() => goToSignUpPage(nagivate)}>Criar</button>
            </form>
          </div>
      </div>
    );  
  };
  
  export default LoginPage;