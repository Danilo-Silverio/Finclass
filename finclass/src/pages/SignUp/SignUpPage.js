import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToLoginPage, goToSignUp2Page } from "../../routes/coordinator.js";
import Logo from "../../assets/images/finclass-logo.png";
import "../../assets/css/SignUp/SignUpStyle.css";
import "../../assets/css/SignUp/Responsive.css";



const SignUpPage = () => {

    const navigate = useNavigate();

    return (
      <div className='register-page'>
        <header className="register-header">
          <img className="register-logo" src={Logo} onClick={() => goToHomePage(navigate)} alt="Logo Finclass" />
          <button className='login' onClick={() => goToLoginPage(navigate)}>Entrar</button>
        </header>
        <div>
          <form>
          <fieldset className= 'create-user'>
            <div className='fieldset-header'>
              <p className='step'>PASSO: <span>1 -</span> 2</p>
              <h1>Criar conta</h1>
              <p className='informations'>Preencha os campos abaixo para continuarmos avançando com o seu cadastro</p>
            </div>
            <label>Nome</label>
            <input 
                type="text" 
                placeholder='Digite seu nome'
                required
            />
            <label>Sobrenome</label>
            <input 
                type="text" 
                placeholder='Digite seu sobrenome'
                required
            />
            <label>Email</label>
            <input 
                type="email" 
                placeholder='Digite seu e-mail'
                required
            />
            <label>Celular</label>
            <input 
                type="text" 
                placeholder='(41) 9 9999-9999'
                required
            />
            <button 
              className='continue' 
              onClick={() => goToSignUp2Page(navigate)}
              type="submit"
              >Continue
            </button>
          </fieldset>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignUpPage;