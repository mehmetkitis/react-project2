import PaginationProductCard from './PaginationProductCard'

const PaginationProduct = ({ productsLoading, products, identifyHandler, page, setPage, pages }) => {



    return (
        <>
            {productsLoading && <p>...Loading</p>}
            <div>
                <select value={page} onChange={(e) => setPage(e.target.value)}>
                    {pages.map((p, index) => {
                        return (
                            <option key={index} value={p}>{p + 1}</option>
                        )
                    })}
                </select>
            </div>
            <div className='flex w-screen gap-1 flex-wrap '>
                {products?.map((product, index) => {
                    return (
                        <PaginationProductCard product={product} key={index} identifyHandler={identifyHandler} />
                    )
                })}
            </div>
        </>

    )
}

export default PaginationProduct
