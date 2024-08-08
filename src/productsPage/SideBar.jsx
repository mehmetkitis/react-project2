import React, { useState } from 'react'
import styled from 'styled-components';
import "./SideBar.css"


const SideBarCategory = styled.div`
display: flex;
justify-content: space-between;
background-color: white;
padding: 1px;
font-size: 50px;
cursor: pointer;
width: 100%;
`

const category = [
  {cate:"jewelery"},
  {cate:"men's clothing"},
  {cate:"electronics"},
  {cate:"women's clothing"}]

const SideBar = ({kategori,setKategori}) => {
    
  return (
    <SideBarCategory>
      {category.map((c,index) => {
        return(<button key={index} className={kategori === c.cate ? "click" : ""} onClick={() => setKategori(kategori === c.cate ? "none" : c.cate)}>{c.cate}</button>)
      })}
    </SideBarCategory>
  )
}

export default SideBar
