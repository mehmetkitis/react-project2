import React, { useState } from 'react'
import styled from 'styled-components';
import "./SideBar.css"


const SideBarCategory = styled.div`
display: flex;
justify-content: space-between;
background-color: white;
padding: 1px;
font-size: 1rem;
cursor: pointer;
width: 100%;
`
const SideBarButton = styled.button`
border:1px solid red;
padding:0.5rem
`

const category = [
  { cate: "jewelery" },
  { cate: "men's clothing" },
  { cate: "electronics" },
  { cate: "women's clothing" }]

const SideBar = ({ kategori, setKategori }) => {

  return (
    <SideBarCategory>
      {category.map((c, index) => {
        return (<SideBarButton key={index} className={kategori === c.cate ? "click" : ""} onClick={() => setKategori(kategori === c.cate ? "none" : c.cate)}>{c.cate}</SideBarButton>)
      })}
    </SideBarCategory>
  )
}

export default SideBar
