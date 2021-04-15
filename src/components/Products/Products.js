import React, { useState, useEffect } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SingleProduct from './SingleProduct/SingleProduct';
import Loading from '../Loading/Loading';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        // console.log(data);
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <Loading />;
  return (
    <section className="products">
      <div className="products__top container">
        <h1>All Products</h1>
        <form>
          <select>
            <option value="1">Default Sorting</option>
            <option value="2">Sort By Price</option>
            <option value="3">Sort By Popularity</option>
            <option value="4">Sort By Sale</option>
            <option value="5">Sort By Rating</option>
          </select>
          <span>
            <ArrowDropDownIcon />
          </span>
        </form>
      </div>

      <div className="products__center container">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
      <div className="pagination">
        <div className=" container">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span className="page__icon">
            <ArrowForwardIosIcon className="page__icon" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Products;
