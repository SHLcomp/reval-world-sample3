import './NewestProduct.scss';
import img from '../../assets/bg4.jpg';

const NewestProduct = () => {
  return (
    <div className='newest'>

      <div className="img">
        <img src={img} alt="" />
      </div>

    <div className="product-info">
      <p>Fobish Newest Product</p>
      <h1>Deeply Nourishing Face Serum For Glowing & Healthy Skin</h1>
      <p>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Velit, esse? Cum necessitatibus 
        eaque aperiam ad minima sint, obcaecati temporibus 
        eius dolore expedita debitis quo eos facere. Placeat 
        recusandae reprehenderit illo.</p>
        <div className="des">
          <ul>
            <li><i className="fa-solid fa-leaf"></i> 100% Vegan</li>
            <li><i className="fa-solid fa-circle-xmark"></i> Fragrance Free</li>
            <li><i className="fa-solid fa-vial"></i> Allergy Tested</li>
            <li><i className="fa-solid fa-seedling"></i> 100% Natural</li>
          </ul>
        </div>
        <h4>View</h4>
    </div>
    </div>
  )
}

export default NewestProduct
