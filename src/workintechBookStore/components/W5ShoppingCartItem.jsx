import React, { useContext } from 'react';
import { ScCartItem, ScCartItemDetails } from './W5scParts';
import { CartContext } from '../contexts/CartContext';

const W5ShoppingCartItem = (props) => {
    const { removeItem } = useContext(CartContext);
    return (
        <ScCartItem>
            <img src={props.image} alt={`${props.title} book`} />

            <ScCartItemDetails>
                <h2>{props.title}</h2>
                <p>$ {props.price}</p>
                <button
                    onClick={() => {
                        removeItem(props.id);
                    }}
                >
                    Remove from cart
                </button>
            </ScCartItemDetails>
        </ScCartItem >
    );
};

export default W5ShoppingCartItem;
