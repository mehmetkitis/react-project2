
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import HomePage from './mainpages/HomePage'
import AboutMe from './mainpages/AboutMe'
import Nav from './mainpages/Nav'
import ProductsPage from './productsPage/ProductsPage'
import ProductDetail from './productsPage/ProductDetail'
import WorkintechFilmApp from './workintechFilmSayfası/WorkintechFilmApp'
import WorkintechLoginPage from './workintechLoginPage/WorkintechLoginPage'
import WorkintechRegisterPageApp from './workintechRegisterPage/WorkintechRegisterPageApp'
import WorkintechContactPage from './workintechContactPage/WorkintechContactPage'
import WorkintechLogin from './workintechLogin/WorkintechLogin'
import CalculatorApp from './calculator/CalculatorApp'
import WorkintechUseFormApp from './workintechUseForm/WorkintechUseFormApp'
import Counter from './counter/Counter'
import { useLocalStorage } from './hooks/useLocalStorage'
import CounterReducer from './counter/CounterReducer'
import Users from './workintechLoginPage/Users'
import WorkintechCalculatorApp from './workintechCalculator/WorkintechCalculatorApp'
import WIMDBFilmApp from './workintechIMDBFilm/wIMDBFilmC/WIMDBFilmApp'
import WFavFilmsApp from './workintechFavFilms/WFavFilmsApp'
import W4FihristApp from './workintechFihrist/W4FihristApp'
import PaginationProductApp from './paginationProduct/PaginationProductApp'
import WBookStoreApp from './workintechBookStore/WBookStoreApp'
import WorkintechFriendsApp from './workintechFriends/WorkintechFriendsApp'
import AuthContextProvider from './workintechFriends/contexts/AuthContext'

function App() {

  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/friends">
          <AuthContextProvider>
            <BrowserRouter>
              <WorkintechFriendsApp />
            </BrowserRouter>
          </AuthContextProvider>
        </Route>
        <Route path="/bookStore" >
          <BrowserRouter>
            <WBookStoreApp />
          </BrowserRouter>
        </Route>
        <Route path="/users" >
          <Users />
        </Route>
        <Route path="/paginationProduct" >
          <BrowserRouter>
            <PaginationProductApp />
          </BrowserRouter>
        </Route>
        <Route path="/fihrist" >
          <BrowserRouter>
            <W4FihristApp />
          </BrowserRouter>
        </Route>
        <Route path="/imdbFilm" >
          <BrowserRouter>
            <WIMDBFilmApp />
          </BrowserRouter>
        </Route>
        <Route path="/favFilm" >
          <BrowserRouter>
            <WFavFilmsApp />
          </BrowserRouter>
        </Route>
        <Route path="/workintechCalculator" >
          <WorkintechCalculatorApp />
        </Route>
        <Route path="/counter" >
          <Counter />
        </Route>
        <Route path="/counterReducer" >
          <CounterReducer />
        </Route>
        <Route path="/taskpage">
          <WorkintechUseFormApp />
        </Route>
        <Route path="/hakkimda">
          <AboutMe />
        </Route>
        <Route path="/loginpage">
          <WorkintechLoginPage />
        </Route>
        <Route path="/login">
          <WorkintechLogin />
        </Route>
        <Route path="/contact">
          <WorkintechContactPage />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/calculator" >
          <CalculatorApp />
        </Route>
        <Route path="/product-detail/:productId/:productTitle">
          <ProductDetail />
        </Route>
        <Route path="/filmlerSayfasi">
          <BrowserRouter>
            <WorkintechFilmApp />
          </BrowserRouter>
        </Route>
        <Route path="/register">
          <BrowserRouter>
            <WorkintechRegisterPageApp />
          </BrowserRouter>
        </Route>
        <Route path="*">
          <h2>404-Sayfa Bulunamadı</h2>
        </Route>
      </Switch>
    </>
  )
}

export default App
