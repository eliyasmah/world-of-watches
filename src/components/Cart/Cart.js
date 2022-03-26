
import React from 'react';
import Product from '../Product/Product';
import './Cart.css';

const Cart = (props) => {
    console.log(props);

    const { cart } = props;

    let productName;
    for (const product of cart) {
        productName = product.name;
    }
    return (
        <div className="cart">
            <h3>Selected Watches</h3>
            <h1>cart section here:{props.cart.length}</h1>
            <h3>{productName}</h3>
            <button className="choose-btn">CHOOSE 1 FOR ME</button>
            <button className="choose-again-btn">CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;