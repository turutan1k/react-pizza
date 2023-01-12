import React from 'react';
import { Link } from 'react-router-dom';
import PizzaLogo from './../../assets/images/pizza-logo.svg';

export default function Logo() {
    return (
        <div className="logo">
            <img src={PizzaLogo} alt="pizza logo" />
            <div className="content">
                <Link to="/" className="title">
                    React pizza
                </Link>
                <div className="subtitle">самая вкусная пицца во вселенной</div>
            </div>
        </div>
    );
}
