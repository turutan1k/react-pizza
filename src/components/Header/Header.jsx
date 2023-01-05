import React from 'react';
import Bucket from './Bucket';
import Burger from './Burger';
import Logo from './Logo';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <Burger />
                <Logo />
                <Bucket />
            </div>
        </header>
    );
}
