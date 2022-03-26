
import React from 'react';
import Product from '../Product/Product';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    return (
        <div className="cart">
            <h3>Selected Watches</h3>
            {
                cart.map((item) => (<h4 key={item.id}>{item.name}</h4>))
            }
            <button className="choose-btn">CHOOSE 1 FOR ME</button>
            <button className="choose-again-btn">CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;