import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToSignUpPage } from "../../routes/coordinator.js";
import Logo from "../../assets/images/finclass-logo.png";
import RegisterIcon from "../../assets/images/register-icon.png";
import LoginIcon from "../../assets/images/login-icon.png";
import MenuIcon from "../../assets/images/menu-icon.png";
import SloganIcon from "../../assets/images/slogan-icon.png";
import NextSectionIcon from "../../assets/images/next-section-icon.png";
import AppFinclass from "../../assets/images/app-finclass.png";
import "../../assets/css/Home/HomeStyle.css"
import "../../assets/css/Home/Responsive.css"



const HomePage = () => {

    const navigate = useNavigate();

  return (
    <div className="page-container">
      <header className="home-header">
        <img className="site-logo" src={Logo} alt="Finclass Logo" />
        <nav className="nav-buttons">
          <button className="nav-btn" onClick={() => goToSignUpPage(navigate)} >
            <img src={RegisterIcon} alt="Register Icon" />
            Assine agora
          </button>
          <button className="nav-btn" onClick={() => goToLoginPage(navigate)}>
            <img src={LoginIcon} alt="Login Icon" />
            Já sou assinante
          </button>
          <button className="nav-btn-mobile" onClick={() => goToLoginPage(navigate)}>
            <img src={LoginIcon} alt="Login Icon" />
            Entrar
          </button>
          <button className="nav-menu-mobile">
            <img src={MenuIcon} alt="Menu Icon" />
          </button>
        </nav>
      </header>
      <main>
      <section className="first-section">
      <div className="mobile-banner"></div>
      <div className="text">
        <p className="slogan">
          Conhecimento como um ativo
          <img src={SloganIcon} alt="Slogan Icon" />
        </p>
        <h1>Aprenda a investir do zero com os melhores</h1>
        <p className="description">
          Conquiste sua liberdade financeira e entre para o mundo dos
          investimentos com os maiores especialistas do mercado.
        </p>
        <button className="subscribe-button" onClick={() => goToSignUpPage(navigate)}>Assine agora</button>
        <p className="subscribe-info">
          Assine a partir de <span>R$ 39,90/mês no plano anual.</span>
        </p>
        <a
          className="next-section"
          href="https://github.com/Danilo-Silverio"
          target="_blank"
        >
          Descubra como
          <img src={NextSectionIcon} alt="Go to the next section icon" />
        </a>
        <img className="app-image" src={AppFinclass} alt="App Finclass" />
      </div>
    </section>
      </main>
    </div>
  );
};

export default HomePage;