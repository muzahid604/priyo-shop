import React from 'react';

const Cart = (props) => {
    const { name } = props.cart
    return (
        <div>
            {name}
        </div>
    );
};

export default Cart;