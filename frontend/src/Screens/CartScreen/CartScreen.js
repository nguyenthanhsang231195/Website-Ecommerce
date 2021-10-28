import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import {withRouter} from 'react-router';
import CartItem from '../../Components/CartItem/CartItem';
import productData from '../../Data/data';
import formatCurrency from '../../util';
import './CartScreen.css';

function CartScreen(props) {

    const cartItems = useSelector((state) => state.cartItems.value)
    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])

    return (
<div className="cart-screen">
    <div className="cart-name">
        <div className="shadows">
            <span> G </span>
            <span> I </span>
            <span> Ỏ </span>
            <span> H </span>
            <span> À </span>
            <span> N </span>
            <span> G </span>
        </div>
    </div>

    <div className="cart-main">
        <table className="cart-table">
            <thead className="cart-table-first">
                <tr>
                    <th> Hình Ảnh </th>
                    <th> Tên Sản Phẩm </th>
                    <th> Giá </th>
                    <th> Số Lượng </th>
                    <th> Xóa </th>
                </tr>
            </thead>

            {cartProducts.map((item, index) => (
                <CartItem item={item} key={index}/>
            ))}
        </table>
    </div>

    <div className="box-total-cart">
        <div className="box-name-total-cart">
            <h3> Tóm Tắt Đơn Hàng </h3>
        </div>
    
        <div className="total-cart">
            <ul>
                <li className="li-cart-1">
                    <p> Tổng số lượng: </p>
                    <p> {totalProducts} Sản phẩm </p>
                </li>

                <li className="li-cart-2">
                    <p> Giá trị đơn hàng: </p>
                    <p> {formatCurrency(Number(totalPrice))} </p>
                </li>

                <li className="li-cart-3">
                    <p> Điểm thưởng tích lũy: </p>
                    <p> {Math.round(Number(totalPrice) * 0.08)} Điểm ( 1 Điểm = 1.000 Đ) </p> 
                </li>

                <li className="li-cart-4">
                    <button type="button">
                        Duyệt ngay
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>
    )
}

export default withRouter(CartScreen);