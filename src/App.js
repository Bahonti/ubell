import React from 'react';
import './App.css';
import Menu from "./menu";
import Rend from "./rend";
import Category from "./category";
import SearchCar from "./searchCar";
import Footer from "./footer";

const  App = () => {
    return (
        <div>
            <Menu/>
            <Rend/>
            <Category/>
            <SearchCar/>
            <Footer/>
        </div>
    )
}

export default App;
