
import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, id, img, price } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <p>id: {id}</p>
            </div>
            <button onClick={() => props.addToCart(props.product)} className="cart-btn">Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Product;