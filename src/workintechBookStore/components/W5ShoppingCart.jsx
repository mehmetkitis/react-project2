import React, { useContext } from 'react';
import { ScCartCheckout } from './W5scParts';
import { CartContext } from '../contexts/CartContext';
import W5ShoppingCartItem from './W5ShoppingCartItem';

const W5ShoppingCart = () => {
    const { cart } = useContext(CartContext);
    const getCartTotal = () => {
        return cart
            .reduce((acc, value) => {
                return acc + value.price;
            }, 0)
            .toFixed(2);
    };

    return (
        <div>
            {cart.map((item) => (
                <W5ShoppingCartItem key={item.id} {...item} />
            ))}

            <ScCartCheckout>
                <p>Total: ${getCartTotal()}</p>
                <button>Checkout</button>
            </ScCartCheckout>
        </div>
    );
};

export default W5ShoppingCart;
