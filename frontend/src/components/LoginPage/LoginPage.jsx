import React from 'react'
import './LoginPage.css'

const LoginPage = () => {
    return (

    <div className="over-conteriner">
        <div className="container">
            <div className="logo">
                <img id="logoDesktop" src="../../../img/logo.svg" />
            </div>
            
            <div className="login-container">
                <form action="login" method="POST">
                    <input name="email" type="text" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />

                    <button type="submit">LOGIN</button>
                    <a href="" className="add-info">Forgot Password?</a>
                    <a href="register" className="add-info">Don't have an account? Sign up!</a>
                </form>
            </div>
        </div>
    </div>

    )
}

export default LoginPage