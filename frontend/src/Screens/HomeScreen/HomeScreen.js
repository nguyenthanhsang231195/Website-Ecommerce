import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import policy from '../../Data/policy';
import formatCurrency from '../../util';
import './HomeScreen.css';
import LoadingBox from '../../Components/LoadingBox/LoadingBox';
import MessageBox from '../../Components/MessageBox/MessageBox';


export default function HomeScreen() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    const getProducts = (count) => {
        const max = products.length - count
        const start = Math.floor(Math.random() * max)
        return products.slice(start, start + count)
    }

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 992, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    useEffect(() => {
        const fetchData = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('/api/products');
            setLoading(false);
            setProducts(data);
        } catch (err) {
            setError(err.message);
            setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
<>
{loading ? 
(<LoadingBox></LoadingBox>) : error ? 
(<MessageBox variant="danger"> {error} </MessageBox>) : (
<div className="home-screen">

    <div className="policy">
        {policy.map((item, index) => 
            <div className="policy-card" key={index}>
                <div className="policy-icon">
                    <i className={item.icon}></i>
                </div>
                <div className="policy-info">
                    <div className="policy-name">
                        {item.name}
                    </div>
                    <div className="policy-description">
                        {item.description}
                    </div>
                </div>
            </div>
        )}
    </div>

    {/* Seller */}
    <div className="best-seller-product">
        <div className="title-product">
            <h2> Sản phẩm bán chạy </h2>
        </div>

        <ul>
        <Carousel breakPoints={breakPoints}>
            {getProducts(8).map((product) => (
                <li key={product._id}>
                    <div className="box-product">
                        <Link to={`/product/${product.slug}`}>
                            <img className="product-image" src={product.image_main} alt={product.name} />
                        </Link>

                        <Link to={`/product/${product.slug}`}>
                            <h2 className="product-name"> {product.name} </h2>
                        </Link>
                        
                        <h3 className="product-price"> {formatCurrency(product.price)} </h3>
                    </div>
                </li>
            ))}
        </Carousel>
        </ul>
    </div>
            
    <div className="Banner-Change">
        <img src="/images/BannerSale.png" alt="" />
    </div>

    <div className="discount-product">
        <div className="title-product-discount">
            <span> Tưng bừng khai chương! Giá giảm kịch sàn </span>  
        </div>

        <ul>
        {getProducts(10).map((product) => (
        <li className="website-homescreen" key={product._id}>
            <div className="box-product">
                <Link to={`/product/${product.slug}`}>
                    <img className="product-discount-image" src={product.image_main} alt={product.name} />
                </Link>

                <Link to={`/product/${product.slug}`}>
                    <h2 className="product-discount-name"> {product.name} </h2>
                </Link>
                
                <div className="product-discount-sell">
                    <h3 className="product-discount-price"> 
                        {formatCurrency(product.price)}
                    </h3>
                    <h3 className="product-discount-price-sell"> 
                        <small>
                            {formatCurrency(product.price)}
                        </small>
                    </h3>
                </div>
            </div>
        </li>
        ))}
        {getProducts(6).map((product) => (
        <li className="mobie-homescreen" key={product._id}>
            <div className="box-product">
                <Link to={`/product/${product.slug}`}>
                    <img className="product-discount-image" src={product.image_main} alt={product.name} />
                </Link>

                <Link to={`/product/${product.slug}`}>
                    <h2 className="product-discount-name"> {product.name} </h2>
                </Link>
                
                <div className="product-discount-sell">
                    <h3 className="product-discount-price"> 
                        {formatCurrency(product.price)}
                    </h3>
                    <h3 className="product-discount-price-sell"> 
                        <small>
                            {formatCurrency(product.price)}
                        </small>
                    </h3>
                </div>
            </div>
        </li>
        ))}
        </ul>

        <div className="change-page">
            <Link to="/category" className="change-page-category">
                <h1>
                    <span> Xem </span>
                    <span> Thêm </span>
                </h1>
            </Link>
        </div>
    </div>
</div>
)}
</>

    );
}

