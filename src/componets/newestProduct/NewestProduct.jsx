import './NewestProduct.scss';
import img from '../../assets/epd/epd4.jpg';
import { Link } from 'react-router-dom';

const NewestProduct = () => {
  return (
    <div className='newest'>

      <div className="img">
        <img src={img} alt="" />
      </div>

    <div className="product-info">
      <p>Reval Product Declaration</p>
      <h1>Enviromental Product Declaration</h1>
      <p>In accordance with ISO14025 and EN15804 for white PVC profiles for Windows and doors</p>
      {/* <br /> */}
      <p>The enviromental impacts of this product have been assessed over its <span>whole life cycle</span>. Enviromental product declaration has been <span>verified by an independent third party.</span></p>
        <div className="des">
          <ul>
            <li><i className="fa-solid fa-leaf"></i> Healthier Living Environment</li>
            <li><i className="fa-solid fa-circle-xmark"></i> Energy Savings</li>
            <li><i className="fa-solid fa-vial"></i> Proven Durability</li>
            <li><i className="fa-solid fa-seedling"></i> Eco-Friendly Choice</li>
          </ul>
        </div>
        <Link className='a' to='/reval-world-sample3/epd'><h4 className='cta'>View</h4></Link>
    </div>
    </div>
  )
}

export default NewestProduct
