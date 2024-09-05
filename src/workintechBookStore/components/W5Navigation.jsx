import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ScNav } from './W5scParts';

const W5Navigation = () => {
    const { cart } = useContext(CartContext);
    return (
        <ScNav>
            <nav className="content">
                <NavLink to="/bookStoreProducts">Products</NavLink>
                <NavLink to="/bookStoreCart">
                    Cart <span>{cart.length}</span>
                </NavLink>
            </nav>
        </ScNav>
    );
};

export default W5Navigation;
