import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
<div className="nav-header">
    <div className="navbar">
        <ul>
            <li>
                <Link to="/" className="navbar-item"> 
                    <i className="fas fa-home"></i> 
                    <span> Home </span>
                </Link> 
            </li>

            <li>
                <Link to="/categorycheck" className="navbar-item">
                    <i className="fab fa-product-hunt"></i> 
                    <span> Category </span> 
                </Link>
                
            </li>

            <li>
                <Link to="/sale" className="navbar-item">
                    <i className="fas fa-piggy-bank"></i> 
                    <span> Sale </span> 
                </Link>
            </li>

            <li >
                <Link to="/" className="navbar-item">
                    <i className="fas fa-info"></i> 
                    <span> Tin nổi bật </span>
                </Link>
            </li>
        </ul>
    </div>

    <div className="logo">
        <img src="/images/Logo.png" alt=""></img>
    </div>
    
    <div className="sign-in-and-cart">
        <ul>
            <li>
                <Link to="/đăng-nhập" className="navbar-item">
                    <span> Đăng nhập || </span>
                </Link>
            </li>
            <li>
                <Link to="/đăng-ký" className="navbar-item">
                    <span>  Đăng ký || </span>
                </Link>
            </li>
            <li>
                <Link to="/cart" className="navbar-item">
                    <i className="fas fa-cart-plus"></i>
                </Link>
            </li>
        </ul>
    </div>
</div>
    )
}
