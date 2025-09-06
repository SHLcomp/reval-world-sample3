import Footerr from '../footer/Footer';
import './ProductDisplay.scss';
const productDisplay = (props) => {
  const {product} = props;
  return (
    <div className='all-products container-fluid'>
        <div className="chosen-item">

        <div className="left">
          <img src={product.img} alt='' />
          <div className="img-info"></div>
        </div>

        <div className="right">
          <div className="item-info">
            
          <h1>{product.realName}</h1>
          <p>{product.displayName}</p>
          <p>{product.des}</p>
          <h3>Category: {product.cat}</h3>

          <div className="item-ctas">
            <button>Read More <i class="fa-solid fa-magnifying-glass"></i></button>
          </div>

          </div>
        </div>
        
      </div>

      <Footerr />
    </div>
  )
}

export default productDisplay
