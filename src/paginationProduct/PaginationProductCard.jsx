import React from 'react'
import { NavLink } from 'react-router-dom'

const PaginationProductCard = ({ product, identifyHandler }) => {
    const identify = product.id
    return (
        <div className='w-[32vw] ml-1' >
            <img className='h-1/2 w-full' src={product?.images[0].url} />
            <h3>{product?.name}</h3>
            <p>{product?.description}</p>
            <p>{product?.price}</p>
            <p>Stok: {product?.stock}</p>
            <NavLink className="mr-1 text-blue-600" onClick={() => { identifyHandler(identify) }} to={`/ürün-detayları/${identify}`}>İncele</NavLink>
            <NavLink className=" text-blue-600" onClick={() => { identifyHandler(identify) }} to={`/ürün-güncelle/${identify}`}>Güncelle</NavLink>
        </div>
    )
}

export default PaginationProductCard