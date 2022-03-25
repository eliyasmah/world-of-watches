
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, id, img, price } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <p>id: {id}</p>
            </div>
            <button></button>
        </div>
    );
};

export default Product;