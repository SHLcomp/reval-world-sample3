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
          <h4>${product.price}</h4>
          <p>{product.des.map((i)=>{
            return (
              <p>{i}</p>
            )
          })}</p>

          <div className="item-ctas">
            <button className="add-to-cart">Add to Cart <i class="fa-solid fa-cart-shopping"></i></button>
          </div>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default productDisplay
