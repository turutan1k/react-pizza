import React from 'react';
import Categories from '../components/Content/Categories';
import Sort from '../components/Content/Sort';
import Skeleton from '../components/Content/PizzaBlock/Skeleton';
import PizzaBlock from '../components/Content/PizzaBlock/PizzaBlock';

export default function HomePage() {
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        fetch('https://63baf82f56043ab3c7aa17da.mockapi.io/pizzas')
            .then((res) => res.json())
            .then((arr) => {
                setPizzas(arr);
                setIsLoading(false);
            });
    }, []);
    return (
        <>
            <div className="container">
                <div className="header">
                    <Categories />
                    <Sort />
                </div>
            </div>
            <div className="cards">
                <h3 className="title">Все пиццы</h3>
                <div className="container">
                    {isLoading
                        ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
                        : pizzas.map((pizza) => (
                              <PizzaBlock key={pizza.id} {...pizza} />
                          ))}
                </div>
            </div>
        </>
    );
}
