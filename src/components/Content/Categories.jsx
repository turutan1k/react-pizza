import React from 'react';

export default function Categories() {
    let [activeIndex, setActiveIndex] = React.useState(0);
    let OnSetActiveIndex = (index) => {
        setActiveIndex(index);
    };
    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ];
    return (
        <>
            <nav className="category">
                <ul className="list">
                    {categories.map((category, i) => (
                        <li
                            key={i}
                            className={
                                activeIndex === i ? 'item active' : 'item'
                            }
                            onClick={() => OnSetActiveIndex(i)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
