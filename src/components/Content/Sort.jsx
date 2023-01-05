import React from 'react';
import SortButton from './../../assets/images/sortClose.svg';

export default function Sort() {
    return (
        <>
            <nav className="sort">
                <div className="description">
                    <img className="img" src={SortButton} alt="SortButton" />
                    <h2 className="title">Сортировка по:</h2>
                    <button
                        className="button"
                        data-easy-toggle="#content__sort"
                        data-easy-class="show"
                        data-easy-rcoe
                    >
                        популярности
                    </button>
                </div>
                <ul id="#content__sort" className="list show">
                    <li className="item active">популярности</li>
                    <li className="item">по цене</li>
                    <li className="item">по алфавиту</li>
                </ul>
            </nav>
        </>
    );
}
