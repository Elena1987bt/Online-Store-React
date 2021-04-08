import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  if (loading) return <Loading />;
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <ProductsPage />
          </Route>
          <Route path="/productDetail" exact>
            <ProductDetailPage />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
