import React from 'react';
import Categories from './Categories';
import Sort from './Sort';
import PizzaBlock from './PizzaBlock';
import pizzas from '../../assets/pizzas.json';

export default function Content() {
    return (
        <>
            <main className="content">
                <div className="container">
                    <div className="header">
                        <Categories />
                        <Sort />
                    </div>
                </div>
                <div className="cards">
                    <h3 className="title">Все пиццы</h3>
                    <div className="container">
                        {pizzas.map((pizza) => (
                            <PizzaBlock {...pizza} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
