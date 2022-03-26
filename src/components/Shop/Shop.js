
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const addToCart = (watch) => {
        const newCart = [...cart, watch];
        setCart(newCart);
    }
    const removeCart = () => {
        setCart([]);
    }
    const chooseOne = () => {
        addToCart(cart[Math.floor(Math.random() * cart.length)]);
    }
    return (
        <div className="shop-container">
            <div className="watchs-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">

                <div className="cart">
                    <h3>Selected Watches</h3>
                    {
                        cart.map((item) => (<h4 key={item.id}>{item.name}</h4>))
                    }
                    <button onClick={chooseOne} className="choose-btn">CHOOSE 1 FOR ME</button>
                    <button onClick={removeCart} className="choose-again-btn">CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;