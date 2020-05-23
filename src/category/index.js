import React from 'react';
import Container from "react-bootstrap/Container";
import './category.css'
import car1 from '../photo/1car.png'
import car2 from '../photo/2car.png'
import car3 from '../photo/3car.png'
import car4 from '../photo/4car.png'

const Category = () =>{
    return(
        <div className="dark-blue">
            <Container className="category">
                <span className="category-car">Категории автомобилей</span>
                <div className="category_car">
                    <img src={car1} alt=""/>
                    <img src={car2} alt=""/>
                    <img src={car3} alt=""/>
                    <img src={car4} alt=""/>
                </div>
                <div className="category_line">
                    <div className="category_numb">
                        <span>Для семьи</span>
                        <p>01</p>
                    </div>
                    <div className="category_numb">
                        <span>Спорт</span>
                        <p>02</p>
                    </div>
                    <div className="category_numb">
                        <span>Внедорожник</span>
                        <p>03</p>
                    </div>
                    <div className="category_numb">
                        <span>Микроавтобус</span>
                        <p>04</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Category