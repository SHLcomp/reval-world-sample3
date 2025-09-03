import './Product.scss';

const Product = (item) => {
  return (
    <div className="product">
          <div className="img">
            <img src={item.img} alt="" />
          </div>
          <div className="info">
            <h3>{item.title}</h3>
            <p>{item.price} JOD</p>
          </div>
        </div>
  )
}

export default Product
