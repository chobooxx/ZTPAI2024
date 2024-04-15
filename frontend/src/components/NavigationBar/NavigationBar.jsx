import React from 'react';
import './NavigationBar.css';


const NavigationBar = () => {
    return (
        <div className="nav_bar">
            <img id="logoMoblie" src="../../../img/mobileLogo.svg" />
            <a href='/homepage' className="menu_element">
                <img src="../../../img/home.svg" />
                <div>HOME</div>
            </a>
            <a href='/categories' className="menu_element">
                <img src="../../../img/category.svg" />
                <div>CATEGORIES</div>
            </a>
            <a className="menu_element">
                <img src="../../../img/to_read.svg" />
                <div>TO-READ</div></a>
            <a className="menu_element">
                <img src="../../../img/me.svg" />
                <div>ME</div>
            </a>
            <a href="logout" id="logoutButton" className="menu_element">
                <img src="../../../img/logout.svg" />
                <div className="logout">LOG OUT</div>
            </a>
        </div>
    )
}

export default NavigationBar