import { createContext } from 'react';
import W5UseLocalStorage from '../hooks/W5UseLocalStorage';

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = W5UseLocalStorage('s11g1', []);

    const addItem = (item) => {
        setCart([...cart, item]);
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

export const CartContext = createContext();
export default CartContextProvider;
