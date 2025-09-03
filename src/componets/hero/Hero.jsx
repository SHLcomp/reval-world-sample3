import './Hero.scss';
import heroBg from '../../assets/bg4.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={heroBg} alt="background image" />
      <div className="text">
        <span>Reval</span>
        <h1>Bringing Your Dreams To Life is <span>Possible</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quasi eius corporis animi tempora? Delectus animi saepe deserunt nulla facere minus voluptates voluptas nesciunt facilis asperiores! Aliquam dicta omnis et!</p>        
        <h4>Contact</h4>

        <div className="notes">
        <p>Reval Creation</p>
        <p>100% Guranteed</p>
      </div>
      </div>
      
    </div>
  )
}

export default Hero
