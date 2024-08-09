import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const ProductCard = ({ product }) => {
    return (
        <div className='productsCard' >
            <img className='h-1/2' src={product?.image} />
            <h3>{product?.title}</h3>
            <p>{product?.description}</p>
            <p>{product?.price}</p>
            <p>{product?.category}</p>
            <Link className="text-blue-800 " to={`/product-detail/${product.id}/${product.title}`}>İncele</Link>
        </div>
    )
}

export default ProductCard