import './Features.scss';
import img1 from '../../assets/quality.svg';
import img2 from '../../assets/correct2.svg';
import img3 from '../../assets/vecteezy_heart_36630663.svg';
import img4 from '../../assets/perfect.svg';

const Features = () => {
  return (
    <div className='features'>

      <div className="feature">
        <img src={img1} alt="" />
        <h2>Quality & Reliability</h2>
        <ul>
        <li>Top-quality craftsmanship backed by years of experience</li>
        <li>Built to last — we use only trusted materials and proven methods.</li>
        <li>On time, on budget, and done right the first time</li>
        </ul>
      </div>


      <div className="feature">
        <img src={img3} alt="" />
        <h2>Customer Satisfaction</h2>
        <ul>
          
        <li>100% satisfaction guaranteed — we don’t leave until you’re happy</li>
        <li>Your vision is our blueprint, and your satisfaction is our goal.</li>
        <li>A reputation built on referrals and repeat customers</li>
        </ul>
      </div>


      <div className="feature">
        <img src={img4} alt="" />
        <h2>Professional Service</h2>
        <ul>
          
        <li>Fully licensed and insured for your peace of mind.</li>
        <li>Clear communication and honest pricing from start to finish.</li>
        <li>No hidden costs — just reliable service you can count on.</li>
        </ul>
      </div>


      <div className="feature">
        <img src={img2} alt="" />
        <h2>Efficiency & Convenience</h2>
        <ul>
        <li>Fast, reliable service without cutting corners.</li>
        <li>Flexible scheduling to fit your needs</li>
        <li>We handle everything so you don’t have to stress.</li></ul>
      </div>


    </div>
  )
}

export default Features
