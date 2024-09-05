
import { Route } from 'react-router-dom';

import W5Navigation from './components/W5Navigation';
import W5Products from './components/W5Products';
import W5ShoppingCart from './components/W5ShoppingCart';
import ProductContextProvider from './contexts/ProductContext';
import { CartContextProvider } from './contexts/CartContext';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function WBookStoreApp() {
    return (
        <CartContextProvider>
            <ProductContextProvider>
                <div>
                    <W5Navigation />
                    <main className="content">
                        <Switch>
                            <Route path="/bookStoreProducts">
                                <W5Products />
                            </Route>
                            <Route path="/bookStoreCart">
                                <W5ShoppingCart />
                            </Route>
                        </Switch>
                    </main>
                </div>
            </ProductContextProvider>
        </CartContextProvider>
    );
}

export default WBookStoreApp;
