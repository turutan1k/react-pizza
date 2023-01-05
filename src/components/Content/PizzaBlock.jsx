import React from 'react';
import CardImage from './../../assets/images/cheese__chicken.png';
export default function PizzaBlock({
    imageUrl,
    title,
    sizes,
    types,
    price,
}) {
    const typeNames = ['тонкое', 'традиционное'];
    console.log(typeNames);
    let [pizzaCount, setPizzaCount] = React.useState(0);
    const onClickAdd = () => {
        setPizzaCount(pizzaCount + 1);
    };
    let [activeIndexVariety, setActiveIndexVariety] = React.useState(0);
    let OnSetActiveIndexVariety = (index) => {
        setActiveIndexVariety(index);
    };
    let [activeIndexSize, setActiveIndexSize] = React.useState(0);
    let OnSetActiveIndexSize = (index) => {
        setActiveIndexSize(index);
    };
    return (
        <div className="card">
            <ul className="list">
                <li className="item">
                    <img src={imageUrl} alt="cardImage" />
                    <h3 className="name">{title}</h3>
                    <div className="properties">
                        <ul className="variety">
                            {types.map((type, i) => (
                                <li
                                    className={
                                        activeIndexVariety === i
                                            ? 'item active'
                                            : 'item'
                                    }
                                    onClick={() => OnSetActiveIndexVariety(i)}
                                >
                                    {typeNames[type]}
                                </li>
                            ))}
                        </ul>
                        <ul className="size">
                            {sizes.map((size, i) => (
                                <li
                                    className={
                                        activeIndexSize === i
                                            ? 'item active'
                                            : 'item'
                                    }
                                    onClick={() => OnSetActiveIndexSize(i)}
                                >
                                    {size} см.
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="buy">
                        <div className="price">{`от ${price} ₽`}</div>
                        <button className="button" onClick={onClickAdd}>
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="#EB5A1E"
                                />
                            </svg>
                            <div className="text">Добавить</div>
                            {pizzaCount >= 1 ? (
                                <div className="count">{pizzaCount}</div>
                            ) : (
                                ''
                            )}
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}
