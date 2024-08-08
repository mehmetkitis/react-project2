import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const {productId,productTitle} = useParams();

  useEffect(() => {
    axios
    .get("https://fakestoreapi.com/products/" + productId
    )
    .then(res => setProduct(res.data))
  },[productTitle])
  
  return (
    <div>
      <h1>Detail: {product?.title}</h1>
      <hr />
      <img src={product?.image} />
      <p>{product?.description}</p>
      <p>{product?.price}</p>
      <p>{product?.category}</p>
    </div>
  )
}

export default ProductDetail
