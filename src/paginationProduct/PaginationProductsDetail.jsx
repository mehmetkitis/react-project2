import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PaginationProductsDetail = ({ id }) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios
            .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/" + id
            )
            .then(res => setProduct(res.data))
    }, [id])

    return (
        <div>
            <h1>Detail: {product?.name}</h1>
            <hr />
            <img src={product?.img} />
            <p>{product?.description}</p>
            <p>{product?.price}</p>
        </div>
    )
}

export default PaginationProductsDetail