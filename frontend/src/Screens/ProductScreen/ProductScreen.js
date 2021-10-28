import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import productData from '../../Data/data';
import { remove } from '../../Redux-Toolkit/product-modal/productModalSlice';
import { addItem } from '../../Redux-Toolkit/shopping-cart/cartItemsSlide';
import formatCurrency from '../../util';
import './ProductScreen.css';

function ProductScreen(props) {

    const dispatch = useDispatch();
    let product = productData.getProductBySlug(props.match.params.slug);

    if (product === undefined) product = {
        name: '',
        slug: '',
        price: '',
        image_main: null,
        categorySlug: "",
        color: [],
        size: [],
        description: ""
    }

    const [previewImg, setPreviewImg] = useState(product.image_main);
    const [color, setColor] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const [quantity, setQuantity] = useState(1);

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }

    useEffect(() => {
        setPreviewImg(product.image_main)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])

    const check = () => {
        if(color === undefined) {
            alert('Bạn chưa chọn màu sản phẩm')
            return false;
        }
        if(size === undefined) {
            alert('Bạn chưa chọn size sản phẩm')
            return false;
        }
        if(quantity >= product.countInStock){
            alert('Hàng còn lại trong kho:' + product.countInStock)
            return false;
        }
        return true;
    }

    const addToCartHandler = () => {
        if (check()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity
            }
            if (dispatch(addItem(newItem))) {
                dispatch(remove())
                props.history.push('/cart')
            } else {
                alert('Fail')
            }
        }
    }

    return (
<div className="product-screen">
    {/* Image */}
    <div className="image-product">
        <div className="image-second">
            <ul>
                <li onClick={() => setPreviewImg(product.image_main)}>
                    <img src={product.image_main} alt={product.name} className="mini-image" />
                </li>
                <li onClick={() => setPreviewImg(product.image01)}>
                    <img src={product.image01} alt={product.name} className="mini-image" />
                </li>
                <li onClick={() => setPreviewImg(product.image02)}>
                    <img src={product.image02} alt={product.name} className="mini-image" />
                </li>
            </ul>
        </div>

        <div className="image-first">
            <img src={previewImg} alt={product.name} className="big-image" />
        </div>

        <div className="image-second-mobile">
            <ul>
                <li onClick={() => setPreviewImg(product.image_main)}>
                    <img src={product.image_main} alt={product.name} className="mini-image-mobie" />
                </li>
                <li onClick={() => setPreviewImg(product.image01)}>
                    <img src={product.image01} alt={product.name} className="mini-image-mobie" />
                </li>
                <li onClick={() => setPreviewImg(product.image02)}>
                    <img src={product.image02} alt={product.name} className="mini-image-mobie" />
                </li>
            </ul>
        </div>
    </div>

    {/* Information */}
    <div className="information-product">
        <ul>
            <li>
                <div className="infor-product-name">
                    <h1> {product.name} </h1>
                </div>
            </li>

            <li>
                <div className="infor-product-price">
                    <h2> {formatCurrency(product.price)} </h2>
                    <h3>  
                        <small>
                            {formatCurrency(product.pricesell)}
                        </small> 
                    </h3>
                </div>

                <hr className="hr-style" />
            </li>

            <li>
                <div className="infor-product-category">
                    <h2>
                        Danh mục:<span> {product.category} </span>   
                    </h2>
                </div>
            </li>

            <li>
                <label className="infor-product-color-size">
                    <h2>  Màu Bạn Thích: </h2>
                   
                    <select className="select-color-size"
                        value={color}
                        onClick={(e) => setColor(e.target.value)}
                    >
                        {
                            product.color.map((item, index) => (
                                <option key={index} value={item}> {item} </option>
                            ))
                        }
                     </select>
                </label>
            </li>

            <li>
                <label className="infor-product-color-size">
                    <h2>  Size Bạn Chọn: </h2>
                   
                    <select className="select-color-size"
                        value={size}
                        onClick={(e) => setSize(e.target.value)}
                    >
                        {
                            product.size.map((item, index) => (
                                <option key={index} value={item}> {item} </option>
                            ))
                        } 
                     </select>
                </label>
            </li>
           
            <li>
                <div className="product-cart">
                    <h2> Số lượng: </h2>

                    <div className="product-quantity">
                        <div className="button-minus" onClick={() => updateQuantity('minus')}>
                            <i className="fas fa-minus"></i>
                        </div>
                        <div className="box-quantity">
                            {quantity}
                        </div>
                        <div className="button-plus" onClick={() => updateQuantity('plus')}>
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                </div>

                <div className="containerB row-xGrid-yMiddle">
                    <div className="row-xGrid iso-standard">
                        <button onClick={addToCartHandler} className="ctrl-standard typ-subhed fx-bubbleDown"> Mua sắm thỏa thích </button>
                    </div>
                </div>
            </li>


        </ul>
    </div>
</div>
    )
}

export default withRouter(ProductScreen);