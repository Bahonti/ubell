import React from 'react';
import Container from "react-bootstrap/Container";
import './footer.css'
import twitter from "../photo/twitter.png";
import insta from "../photo/insta.png";
import vk from "../photo/vk.png";
import logo from "../photo/logo.png";
import vector from "../photo/Vector.png";

const Footer = () =>{
    return(
        <div className="dark-blue">
            <Container className="footer-car">
                <div className="mail-car">
                    <a href="#"><img src={vector} alt="#"/></a>
                    <a href="" className="footer-car_text">ping.ubell.ru</a>
                </div>
                <div className="menu_logo">
                    <img src={logo} alt="#"/>
                </div>
                <div className="icons">
                    <a href="#"><img src={twitter} alt="#"/></a>
                    <a href="#"><img src={insta} alt="#"/></a>
                    <a href="#"><img src={vk} alt="#"/></a>
                </div>
            </Container>
            <Container className="footer-ubell">
                <a href="">© Ubell, 2020</a>
                <a href="">Политика конфиденциальности</a>
            </Container>
        </div>
    )
}
export default Footer