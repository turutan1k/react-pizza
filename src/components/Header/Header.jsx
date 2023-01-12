import React from 'react';
import Bucket from './Bucket';
import Burger from './Burger';
import Logo from './Logo';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <Burger />
                <Logo />
                <Link to="cart">
                    <Bucket />
                </Link>
            </div>
        </header>
    );
}
