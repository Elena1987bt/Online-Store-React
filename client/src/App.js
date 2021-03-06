import { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './utils/ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAppContext } from './context/context';

function App() {
  const [{ cart }, dispatch] = useAppContext();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems'));
    if (items) {
      dispatch({
        type: 'GET_LOCAL_STORAGE',
        payload: items,
      });
    }
  }, [dispatch]);
  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [cart, dispatch]);
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <ProductsPage />
          </Route>
          <Route path="/productDetail/:id" exact>
            <ProductDetailPage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <RegisterPage />
          </Route>
          <Route path="/cart" exact>
            <CartPage />
          </Route>
          <Route path="/checkout" exact>
            <CheckoutPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
