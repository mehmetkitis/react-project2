
import React, { useEffect, useState } from 'react'
import "./ProductsPage.css"
import ProductCard from './ProductCard';
import SideBar from './SideBar';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const BtnDark = styled.button`
border-radius:7px;
`



const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [kategori, setKategori] = useState("none");
  const [drk,setDrk]=useState(false);
  const [drkText,setDrkText]=useState("Dark Mode");

  

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data.filter((i) => {
          return i.category === kategori;
        }));
      })
      .catch((err) => console.warn(err));
  },[kategori])
  
  const onClick2 = () => {
    setDrk(!drk);
    drk ? setDrkText("Dark Mode") : setDrkText("Light Mode");
  }
  
  

  return (
    <div >
      <Button variant="primary">Primary</Button>{' '}
      <BtnDark onClick={onClick2} >{drkText}</BtnDark>

      <h1 className='urunlersyf'>Ürünler Sayfası</h1>
      <SideBar  kategori={kategori} setKategori={setKategori} />

      <div style={drk === false ? {backgroundColor:"white",color:"black"}:{backgroundColor:"black",color:"white"}} className='productsContainer'>
        {products.map((product) => {
          return (
            <ProductCard product={product} key={product.id} />
          )
        })}
      </div>
    </div>
  )
}

export default ProductsPage
