import React from 'react';
import NotFoundImage from './../../../assets/images/not__found.svg';
import s from './../../../assets/scss/notFound.module.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFoundBlock() {
    const navigate = useNavigate();
    return (
        <div class={s.container}>
            <div class={s.title}>
                <h1>Ничего не найдено</h1>
                <img src={NotFoundImage} alt="WarningImage" />
            </div>
            <div class={s.subtitle}>
                <h2>
                    К сожалению, данная страница отсутствует в нашем
                    интернет-магазине
                </h2>
            </div>
            <Link to="" class={s.back}>
                На главную
            </Link>
        </div>
    );
}
