import { configureStore } from '@reduxjs/toolkit';
import productModalSlice from './Redux-Toolkit/product-modal/productModalSlice';
import cartItemsSlide from './Redux-Toolkit/shopping-cart/cartItemsSlide';

export const store = configureStore({
    reducer: {
        productModal: productModalSlice,
        cartItems: cartItemsSlide
    },
}) 