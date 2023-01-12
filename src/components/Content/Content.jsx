import React from 'react';

import HomePage from '../../pages/HomePage';
import EmptyCartPage from '../../pages/EmptyCartPage';
import CartPage from '../../pages/CartPage';
import NotFoundPage from '../../pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';

export default function Content() {
    return (
        <>
            <main className="content">
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="pizzas" element={<HomePage />}>
                        <Route path="all" element={<HomePage />} />
                        <Route path="meat" element={<HomePage />} />
                        <Route path="vegetarian" element={<HomePage />} />
                        <Route path="grill" element={<HomePage />} />
                        <Route path="spicy" element={<HomePage />} />
                        <Route path="closed" element={<HomePage />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
        </>
    );
}
