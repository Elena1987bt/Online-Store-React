import { useState, useEffect } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SingleProduct from './SingleProduct/SingleProduct';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { useAppContext } from '../../context/context';
import './Products.css';
import useFetchData from '../../hooks/useFetchData';
import filterByCategories from '../../utils/filterByCategories';

const Products = () => {
  const [{ category, loading, products, error }, dispatch] = useAppContext();
  const hasAlreadyLoadedProducts = Boolean(products.length > 0);
  const data = useFetchData({
    url: 'https://fakestoreapi.com/products',
    options: { disable: hasAlreadyLoadedProducts },
  });

  const [localProducts, setLocalProducts] = useState(products);

  useEffect(() => {
    if (hasAlreadyLoadedProducts) {
      setLocalProducts(products);
    } else if (data) {
      setLocalProducts(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const filterProducts = filterByCategories(category, localProducts);

  const filterProduct = (e) => {
    const category = e.target.value;
    dispatch({
      type: 'FILTER_PRODUCTS',
      payload: { category, products: products },
    });
  };

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <section className="products">
      <div className="products__top container">
        <h1>All Products</h1>
        <form>
          <select onChange={filterProduct} value={category}>
            <option value="All">All</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
          </select>
          <span>
            <ArrowDropDownIcon />
          </span>
        </form>
      </div>

      <div className="products__center container">
        {filterProducts.map((product) => (
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
