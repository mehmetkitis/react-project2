import React from 'react'
import { NavLink } from 'react-router-dom'

const PaginationProductCard = ({ product, identifyHandler }) => {
    const identify = product.id
    return (
        <div className='w-[32vw] ml-1' >
            <img className='h-1/2 w-full' src={product?.img} />
            <h3>{product?.name}</h3>
            <p>{product?.description}</p>
            <p>{product?.price}</p>
            <p>Stok: {product?.stock}</p>
            <NavLink onClick={() => { identifyHandler(identify) }} to={`/ürün-detayları/${identify}`}>İncele</NavLink>
            <NavLink onClick={() => { identifyHandler(identify) }} to={`/ürün-güncelle/${identify}`}>Güncelle</NavLink>
        </div>
    )
}

export default PaginationProductCard