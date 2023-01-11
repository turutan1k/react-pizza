import React from 'react';
import SortClose from './../../assets/images/sortClose.svg';
import SortOpen from './../../assets/images/sortOpen.svg';

export default function Sort() {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(0);
    let sortItems = ['популярности', 'цене', 'алфавиту'];
    let OnSetSortItem = (index) => {
        setSelected(index);
        setOpen(!open);
    };
    const sortItem = sortItems[selected];
    return (
        <>
            <nav className="sort">
                <div className="description">
                    <img
                        className="img"
                        src={open ? SortOpen : SortClose}
                        alt="SortButton"
                    />
                    <h2 className="title">Сортировка по:</h2>
                    <button
                        onClick={() => setOpen(!open)}
                        className="button"
                        data-easy-toggle="#content__sort"
                        data-easy-class="show"
                        data-easy-rcoe
                    >
                        {sortItem}
                    </button>
                </div>
                {open && (
                    <ul className={open ? 'list show' : 'list'}>
                        {sortItems.map((currentSortItem, i) => (
                            <li
                                key={i}
                                className={
                                    selected === i ? 'item active' : 'item'
                                }
                                onClick={() => OnSetSortItem(i)}
                            >
                                по {currentSortItem}
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </>
    );
}
