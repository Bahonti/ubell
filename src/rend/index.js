import React from 'react';
import Container from "react-bootstrap/Container";
import './rend.css'
import car from '../photo/car.png'
import road from '../photo/road.png'
import way from '../photo/way.png'

const Rend = () => {
    return(
        <div className="gray_car">
            <Container>
                <div className="rend_car-text">
                    <p><span>Ubell</span>— площадка, на которой владелец автомобиля может сдать его в аренду.</p>
                </div>
                <div className="rend_car-block">
                    <div className="rend_car-block1 block">
                        <img src={car} alt=""/>
                        <span>Найди автомобиль по душе</span>
                        <p>Введи местоположение, и выбирай лучший автомобиль</p>
                    </div>
                    <div className="rend_car-block2 block">
                        <img src={road} alt=""/>
                        <span>Построй маршрут</span>
                        <p>Выбери маршрут, свяжись с владельцем и забронируй себе автомобиль</p>
                    </div>
                    <div className="rend_car-block3 block">
                        <img src={way} alt=""/>
                        <span>Отправляйся в путь</span>
                        <p>Закажи доставку автомобиля или забери ее сам, после чего отправляйся в дорогу</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Rend