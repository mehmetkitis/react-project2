
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


function App() {
  return (
    <>
      <Nav />
      <Switch>

        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/users" exact>
          <Users />
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
