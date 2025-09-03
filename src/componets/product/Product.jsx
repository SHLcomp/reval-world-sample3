import { Link } from 'react-router-dom';
import './Product.scss';

const Product = (item) => {
  return (
    <div className="product">
          <div className="img">
            <Link to={`/reval-world-sample3/product/${item.id}`} className='a'><img src={item.img} alt="" /></Link>
          </div>
          <div className="info">
            <h3>{item.realName}</h3>
            <p>{item.price} JOD</p>
          </div>
        </div>
  )
}

export default Product
