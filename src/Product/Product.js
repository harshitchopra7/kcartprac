import React from 'react';
import './Product.css';

function Header({ id, title, image }) {
    return (
        <div className="products ml3">
            <div className="product-card tc center grow shadow-5"> 
                <img src={image} height="200px" width="250px" alt="" />
                <h3 className="mt3">{title}</h3>
            </div>
        </div>

    );
}
export default Header;