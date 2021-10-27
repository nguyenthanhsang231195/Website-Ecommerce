import React, { useState } from 'react';
import { withRouter } from 'react-router';
import productData from '../../Data/data';
import formatCurrency from '../../util';
import './ProductScreen.css';

function ProductScreen(props) {

    const product = productData.getProductBySlug(props.match.params.slug);
    const [previewImg, setPreviewImg] = useState(product.image_main);
    const [quantity, setQuantity] = useState(1);

    const addToCartHandler = () => {
        props.history.push(`/cart/`);
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
                   
                    <select className="select-color-size">
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
                   
                    <select className="select-color-size">
                        {
                            product.size.map((item, index) => (
                                <option key={index} value={item}> {item} </option>
                            ))
                        } 
                     </select>
                </label>
            </li>

            {product.countInStock > 0 && (
            <li>
                <div className="product-cart">
                    <h2> Số lượng: </h2>

                    <select className="input-quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        >
                        {[...Array(product.countInStock).keys()].map((x) => 
                            (<option key={x + 1} value={x + 1}> {x + 1} </option>)
                        )}
                        {quantity}
                    </select>
                </div>

                <div className="containerB row-xGrid-yMiddle">
                    <div className="row-xGrid iso-standard">
                        <button onClick={addToCartHandler} className="ctrl-standard typ-subhed fx-bubbleDown"> Mua sắm thỏa thích </button>
                    </div>
                </div>
            </li>
                )
            }    
        </ul>
    </div>
</div>
    )
}

export default withRouter(ProductScreen);