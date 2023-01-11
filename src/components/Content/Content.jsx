import React from 'react';
import Categories from './Categories';
import Sort from './Sort';
import PizzaBlock from './PizzaBlock/PizzaBlock';
// import pizzas from '../../assets/pizzas.json';

export default function Content() {
    const [pizzas, setPizzas] = React.useState([]);
    React.useEffect(() => {
        fetch('https://63baf82f56043ab3c7aa17da.mockapi.io/pizzas')
            .then((res) => res.json())
            .then((arr) => setPizzas(arr));
    }, []);

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
                            <PizzaBlock key={pizza.id} {...pizza} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
