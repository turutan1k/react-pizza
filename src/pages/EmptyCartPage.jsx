import React from 'react';
import s from './../assets/scss/error.module.scss';
import errorImage from './../assets/images/error.svg';
import emojuImage from './../assets/images/emoju.svg';

export default function EmptyCartPage() {
    return (
        <div class={s.container}>
            <div class={s.title}>
                <h1>Корзина ещё пустая</h1>
                <img src={emojuImage} alt="sadEmoju" />
            </div>
            <div class={s.subtitle}>
                Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
                заказать пиццу, перейди на главную страницу.
            </div>
            <img src={errorImage} alt="emptyCard" />
            <button class={s.back}>Вернуться назад</button>
        </div>
    );
}
