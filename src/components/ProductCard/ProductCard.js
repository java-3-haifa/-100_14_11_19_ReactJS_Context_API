import React from 'react';
import './ProductCard.css'
import ProductCounter from '../ProductCounter/ProductCounter'

function ProductCard(props) {
    return (
        <div className="Card">
            <h3 className="Card-title">Siemens A50</h3>
            <img src="https://res.cloudinary.com/sheygam/image/upload/v1573717361/phones/siemens-a50-1000x1000.jpg" />
                <p className="Card-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="Card-price">$1000</p>
                <div className="Card-control">
                    <button className="btn btn-outline-success">Add to card</button>
                    <ProductCounter />
                </div>
        </div>
    );
}

export default ProductCard;
