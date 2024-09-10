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
  { title: "Counter Reducer", path: "counterReducer" },
  { title: "Users", path: "/users" },
  { title: "Workintech Calculator", path: "/workintechCalculator" },
  { title: "IMDB Film", path: "/imdbFilm" },
  { title: "Favorite Film", path: "/favFilm" },
  { title: "Fihrist", path: "/fihrist" },
  { title: "Pagination Product", path: "/paginationProduct" },
  { title: "Book Store", path: "/bookStore" },
  { title: "Friends", path: "/friends" },
  { title: "Movie Database", path: "/movieDatabase" }
]

const Nav = () => {
  let history = useHistory();
  const [category, setCategory] = useState("");

  return (
    <div className='navLinks overflow-x-scroll'>
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
