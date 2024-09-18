
import { Redirect, Route, Switch } from 'react-router-dom';
import PaginationProduct from './PaginationProduct';
import PaginationProductsDetail from './PaginationProductsDetail';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import PaginationProductForm from './PaginationProductForm';
import { fetchProductsPagination } from './fetchProduct/product';

const PaginationProductApp = () => {
    const [id, setId] = useState();
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState([0])
    const limit = 20;

    const { isPending: productsLoading,
        error,
        data: { products, total } = { products: [], total: 0 }
    } = useQuery({
        queryKey: ["products", page, limit],
        queryFn: () => fetchProductsPagination(page, limit)
    });

    useEffect(() => {
        setPages(Array.from(Array(parseInt(total / limit)).keys()))
    }, [total])

    const identifyHandler = (id) => {
        setId(id);
    }

    return (
        <div>
            <div>
                <h1>Ürünler Sayfası</h1>
            </div>
            <div >
                <Switch>

                    <Route path="/paginationRedirect">
                        <PaginationProduct productsLoading={productsLoading} identifyHandler={identifyHandler} page={page} setPage={setPage} pages={pages} products={products} />
                    </Route>
                    <Route path={`/ürün-detayları/${id}`} >
                        <PaginationProductsDetail id={id} />
                    </Route>
                    <Route path={`/ürün-güncelle/${id}`} >
                        <PaginationProductForm id={id} />
                    </Route>
                    <Route path="/" >
                        <Redirect to="/paginationRedirect" />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default PaginationProductApp
