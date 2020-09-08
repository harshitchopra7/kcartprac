import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";

function Header() {
    return (
        <nav className="header">

            <Link to = "/" className="home-button">
                <h1 className="k-cart">kcart</h1>
            </Link>
            <div className="centre-elements">
                <input type='text' style={{width: 650, height:20}} className="searchbox" /> 
                <SearchIcon className="searchicon" />
                
                <div className="to-align">
                    <Link to="/myaccount" className="decoration">
                        <span className="individual">Hi, Harshit!</span> 
                    </Link> 
                    <Link to="/myorders" className="decoration">
                        <span className="individual">My Orders</span> 
                    </Link>
                    <Link to="/contact" className="decoration">
                        <span className="individual">Contact Us</span> 
                    </Link>
                    <Link to="/checkout" className="decoration">
                        <div className="cart">
                            <ShoppingCartIcon className="cart-color"/>
                            <span className="cart-count">0</span>
                        </div> 
                    </Link>

                </div>
            </div>
        </nav>
    );
}
export default Header;