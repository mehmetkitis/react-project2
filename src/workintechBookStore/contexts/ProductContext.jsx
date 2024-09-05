import { createContext, useContext } from 'react';
import W5UseLocalStorage from '../hooks/W5UseLocalStorage';
import { data } from '../data';
import { CartContext } from '../contexts/CartContext';


export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = W5UseLocalStorage('products', data);
    const { addItem } = useContext(CartContext);

    return (
        <ProductContext.Provider value={{ products, addItem }}>
            {children}
        </ProductContext.Provider>
    );
};

export const ProductContext = createContext();
export default ProductContextProvider;
