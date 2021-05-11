import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TuneIcon from '@material-ui/icons/Tune';
import { useAppContext } from '../../../context/context';
import './SingleProduct.css';

const SingleProduct = ({ bottomClass, product }) => {
  const { id, image, price, title, isFavorite } = product;
  const [{}, dispatch] = useAppContext();
  return (
    <div className="singleProduct">
      <div className="singleProduct__img">
        <img src={image} alt={title} />
        <Link
          to="/cart"
          className={`singleProduct__addCart ${bottomClass && 'bottom'}`}
          onClick={() =>
            dispatch({
              type: 'ADD_TO_CART',
              payload: product,
            })
          }
        >
          <ShoppingCartIcon className="singleProduct__Icon" />
        </Link>

        <ul className="singleProduct__Icons">
          <span>
            <ZoomInIcon className="singleProduct__Icon" />
          </span>
          <span
            onClick={() => {
              if (!isFavorite) {
                dispatch({
                  type: 'ADD_TO_FAVORITES',
                  payload: product,
                });
              } else {
                dispatch({
                  type: 'REMOVE_FROM_FAVORITES',
                  payload: product,
                });
              }
            }}
          >
            {!isFavorite ? (
              <FavoriteBorderIcon className="singleProduct__Icon" />
            ) : (
              <FavoriteIcon className="singleProduct__Icon" />
            )}
          </span>
          <span>
            <TuneIcon className="singleProduct__Icon" />
          </span>
        </ul>
      </div>
      <Link to={`/productDetail/${id}`} className="singleProduct__bottomLink">
        <div className="singleProduct__bottom">
          {title}
          <div className="singleProduct__price">
            <span>${price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

SingleProduct.propTypes = {
  bottomClass: PropTypes.bool,
  product: PropTypes.object,
};
export default SingleProduct;
