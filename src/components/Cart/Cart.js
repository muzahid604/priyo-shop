import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { name, picture } = props.cart
    return (
        <div>
            <div className='cart-div'>
                <img className='cart-img' src={picture} alt="" />
                <h5>{name}</h5>
            </div>
        </div>
    );
};

export default Cart;