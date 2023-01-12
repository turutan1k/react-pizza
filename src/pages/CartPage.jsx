import React from 'react';
import s from './../assets/scss/bucket.module.scss';
import cartImage from './../assets/images/cart.svg';
import removeImage from './../assets/images/remove.svg';
import cheeseChickenImage from './../assets/images/cheese__chicken.png';
import decrementImage from './../assets/images/decrement.png';
import incrementImage from './../assets/images/increment.png';
import cancelImage from './../assets/images/cancel.svg';
import backImage from './../assets/images/back.svg';
import { Navigate, Link, useNavigate } from 'react-router-dom';

export default function CartPage() {
    const navigate = useNavigate();
    return (
        <div class={s.container}>
            <div class={s.header}>
                <div class={s.logo}>
                    <img src={cartImage} alt="cartImage" />
                    <h2>Корзина</h2>
                </div>
                <div class={s.remove}>
                    <img src={removeImage} alt="removeImage" />
                    <h2>Очистить корзину</h2>
                </div>
            </div>
            <ul class={s.cards}>
                <li class={s.card}>
                    <img
                        class={s.img}
                        src={cheeseChickenImage}
                        alt="cardImage"
                    />
                    <div class={s.description}>
                        <div class={s.title}>Сырный цыпленок</div>
                        <div class={s.subtitle}>тонкое тесто, 26 см.</div>
                    </div>
                    <div class={s.counter}>
                        <img
                            class={s.decrement}
                            src={decrementImage}
                            alt="decrementImage"
                        />
                        <div class={s.count}>2</div>
                        <img
                            class={s.increment}
                            src={incrementImage}
                            alt="incrementImage"
                        />
                    </div>
                    <div class={s.price}>770 ₽</div>
                    <img class={s.cancel} src={cancelImage} alt="cancelImage" />
                </li>
            </ul>
            <div class={s.total}>
                <div class={s.card}>
                    <div class={s.text}>Всего пицц:</div>
                    <div class={s.count}>3 шт.</div>
                </div>
                <div class={s.price}>
                    <div class={s.text}>Сумма заказа</div>
                    <div class={s.count}>900 ₽</div>
                </div>
            </div>
            <div class={s.actions}>
                <div class={s.action}>
                    <Link to={navigate(-1)}>
                        <button class={s.back}>
                            <img src={backImage} alt="backImage" />
                            <div>Вернуться назад</div>
                        </button>
                    </Link>
                </div>
                <div class={s.action}>
                    <div class={s.pay}>Оплатить сейчас</div>
                </div>
            </div>
        </div>
    );
}
