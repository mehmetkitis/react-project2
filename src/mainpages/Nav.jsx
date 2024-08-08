import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import "./Nav.css"

const navLinksPaths = [
  { title: "Anasayfa", path: "/" },
  { title: "Hakkimda", path: "/hakkimda" },
  { title: "Ürünler", path: "/products" },
  { title: "Login", path: "/login" },
  { title: "Filmler", path: "/filmlerSayfasi" },
  { title: "Login Page", path: "/loginpage" },
  { title: "Register", path: "/register" },
  { title: "Contact", path: "/contact" },
  { title: "Calculator", path: "/calculator" },
  { title: "Task", path: "/taskpage" },
  { title: "Counter", path: "/counter" },
  { title: "CounterReducer", path: "counterReducer" }
]

const Nav = () => {
  let history = useHistory();
  const [category, setCategory] = useState("");

  return (
    <div className='navLinks'>
      <nav className='navLinks1' >
        {navLinksPaths.map((n, index) => {

          return (
            <NavLink className={category === n.title ? "navLinks3" : "navLinks2"} onClick={() => { setCategory(n.title) }} key={index} to={n.path}>{n.title}</NavLink>
          )
        })}
      </nav>
      <button style={{ height: "80%", margin: "1rem 1rem", background: "red", color: "white" }} onClick={() => { history.goBack() }}>Geri </button>
    </div>
  )
}

export default Nav
