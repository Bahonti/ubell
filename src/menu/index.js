import React from 'react';
import Container from "react-bootstrap/Container";
import './menu.css'
import logo from '../photo/logo.png'
import twitter from '../photo/twitter.png'
import insta from '../photo/insta.png'
import vk from '../photo/vk.png'

const Menu = () => {
    return(
        <div className="dark-blue">
            <Container>
                <div className="menu_logo">
                    <img src={logo} alt="#"/>
                </div>
                <div className="menu_icon">
                    <ul>
                        <li><a>Как это работает</a></li>
                        <li><a>автомобили</a></li>
                        <li><a>Для собственников авто</a></li>
                        <li><a>Зарегистрироваться</a></li>
                    </ul>
                    <div className="icons">
                        <a href="#"><img src={twitter} alt="#"/></a>
                        <a href="#"><img src={insta} alt="#"/></a>
                        <a href="#"><img src={vk} alt="#"/></a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Menu