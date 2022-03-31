import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/finclass-logo.png";
import Arrow from "../../assets/images/arrow.png";
import { goToHomePage, goToLoginPage, goToSignUpPage } from "../../routes/coordinator.js";






const SignUp2Page = () => {

      const navigate = useNavigate();

    return (
      <div className='register-page'>
        <header className="register-header">
          <img className="register-logo" src={Logo} onClick={() => goToHomePage(navigate)} alt="Logo Finclass" />
          <button className='login' onClick={() => goToLoginPage(navigate)}>Entrar</button>
        </header>
        <div>
          <fieldset className= 'create-user'>
            <div className='fieldset-header'>
            <img src={Arrow} onClick={() => goToSignUpPage(navigate)} alt="Go back to step one" />
              <p className='step'>
                PASSO: <span>2 -</span> 2
              </p>
              <h1>Criar conta</h1>
              <p className='informations'>Preencha os campos abaixo para continuarmos avançando com o seu cadastro</p>
            </div>
            <label>Senha</label>
            <input 
                type="text" 
                placeholder='Insira sua senha'
                required
            />
            <label>Confirmar senha</label>
            <input 
                type="text" 
                placeholder='Confirmar sua senha'
                required
            />
            <button className='btn-create-account'>Criar conta</button>
          </fieldset>
        </div>
      </div>
    );
  };
  
  export default SignUp2Page;