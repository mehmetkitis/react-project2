import PaginationProductCard from './PaginationProductCard'

const PaginationProduct = ({ list, identifyHandler, page, setPage, pages }) => {



    return (
        <>
            <div>
                <select value={page} onChange={(e) => setPage(e.target.value)}>
                    {pages.map((p) => {
                        <option value={p}>{p + 1}</option>
                    })}
                </select>
            </div>
            <div className='flex w-screen gap-1 flex-wrap '>
                {list?.map((product, index) => {
                    return (
                        <PaginationProductCard product={product} key={index} identifyHandler={identifyHandler} />
                    )
                })}
            </div>
        </>

    )
}

export default PaginationProduct
