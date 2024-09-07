import { createContext, useState } from 'react';
import { data } from '../data';

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([...data]);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export const ProductContext = createContext();
export default ProductContextProvider;
