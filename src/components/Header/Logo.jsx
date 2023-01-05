import React from 'react';
import PizzaLogo from './../../assets/images/pizza-logo.svg';

export default function Logo() {
    return (
        <div className="logo">
            <img src={PizzaLogo} alt="pizza logo" />
            <div className="content">
                <div className="title">React pizza</div>
                <div className="subtitle">самая вкусная пицца во вселенной</div>
            </div>
        </div>
    );
}
