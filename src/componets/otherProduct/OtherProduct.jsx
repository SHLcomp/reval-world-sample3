import './OtherProduct.scss';
import img from '../../assets/bg1.png';

const OtherProduct = () => {
  return (
    <div className='otherP'>
      <img src={img} alt="" />
      <div className="info">
      <p>Fobish New Hair Product</p>
      <h1>Luxurious Feeling Hair Cream</h1>
      <p>Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Laborum dolore quis 
        reiciendis ad sapiente, soluta asperiores 
        labore ipsum. Reiciendis, obcaecati deleniti. 
        Quasi blanditiis atque velit. Accusantium eaque 
        explicabo asperiores magni.</p>

        <h4>View</h4>
      </div>
    </div>
  )
}

export default OtherProduct
