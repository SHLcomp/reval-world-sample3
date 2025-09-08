import { Link } from 'react-router-dom';
import './Product.scss';

const Product = (item) => {
  return (
    <div className="product">
          <div className="img">
            <Link to={`/product/${item.id}`} className='a'><img src={item.img} alt="" /></Link>
          </div>
          <div className="info">
            <h3>{item.displayName}</h3>
          </div>
        </div>
  )
}

export default Product
