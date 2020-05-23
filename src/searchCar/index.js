import React from 'react';
import Container from "react-bootstrap/Container";
import './searchCar.css'
import small1 from '../photo/photo-small1.png'
import small2 from '../photo/photo-small2.png'
import big from '../photo/big.png'

const SearchCar = () =>{
    return(
        <div className="gray_car">
            <Container className="search-car">
                <div className="searchCar_text">
                    <h3>Найдите свой автомобиль</h3>
                    <p>Арендуйте автомобиль за считанные минуты несколькими нажатиями</p>
                    <a className="car-btn">Попробовать</a>
                </div>
                <div className="searchCar_photo">
                    <div className="searchCar_photo-big">
                        <p>...</p>
                        <img src={big} alt=""/>
                    </div>
                    <div className="searchCar_photo-small">
                        <div className="photo-small"><img src={small1} alt=""/></div>
                        <div className="photo-small"><img src={small2} alt=""/></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SearchCar