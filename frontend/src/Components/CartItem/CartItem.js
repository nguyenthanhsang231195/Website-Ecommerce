import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeItem, updateItem } from '../../Redux-Toolkit/shopping-cart/cartItemsSlide';
import formatCurrency from '../../util';

export default function CartItem(props) {

        const dispatch = useDispatch();
        const itemRef = useRef(null);
        const [item, setItem] = useState(props.item);
        const [quantity, setQuantity] = useState(props.item.quantity);
    
        useEffect(() => {
            setItem(props.item)
            setQuantity(props.item.quantity)
        }, [props.item])
    
        const updateQuantity = (opt) => {
            if (opt === '+' && quantity < item.product.countInStock) {
                dispatch(updateItem({...item, quantity: quantity + 1}))        
            }
            if (opt === '-') {
                dispatch(updateItem({...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1}))
            }
        }
    
        const removeCartItem = () => {
            console.log('removeCartItem')
            dispatch(removeItem(item))
        }

    return (
<tbody className="cart-table-second" ref={itemRef}>
    <tr>
        <th>
            <div className="cart-image">
                <img src={item.product.image_main} alt={item.product.name} className="image-product-cart" />
                <div className="color-product-cart">
                    <h3> Color: {item.color} </h3>  
                </div>
                <div className="size-product-cart"> 
                    <h3> Size: {item.size} </h3>      
                </div> 
            </div>
        </th>

            <th>
                <div className="cart-name-th">
                    <Link to={`/product/${item.slug}`}>
                        <h3> {`${item.product.name} - ${item.color} - ${item.size}`} </h3>
                    </Link>
                </div>
            </th>

            <th>
                <div className="cart-price">
                    <h3> {formatCurrency(item.price)} </h3>  
                </div> 
            </th>

            <th>  
                <div className="product-cart-item">
                    <h3> Số lượng: </h3>

                    <div className="product-quantity-item">
                        <div className="button-minus-item" onClick={() => updateQuantity('-')}>
                            <i className="fas fa-minus"></i>
                        </div>
                        <div className="box-quantity-item">
                                {quantity}
                        </div>
                        <div className="button-plus-item" onClick={() => updateQuantity('+')}>
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                </div>
            </th>

            <th>
                <button type="button" className="button-delete" onClick={() => removeCartItem(item.product)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </th>
        </tr>
    </tbody>       
    )
}


   

