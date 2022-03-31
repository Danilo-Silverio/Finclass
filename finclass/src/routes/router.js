import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage.js";
import LoginPage from "../pages/Login/LoginPage.js";
import SignUpPage from "../pages/SignUp/SignUpPage.js";
import SignUp2Page from "../pages/SignUp/SignUpPage2.js";


const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/register" element={<SignUpPage/>}></Route>
            <Route path="/register2" element={<SignUp2Page/>}></Route>
        </Routes>
    )
};

export default Router; 