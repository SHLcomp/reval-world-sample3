import './Footer.scss';
import logo from '../../assets/logo1.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="grid">
        <div className="txt">
          
        <img src={logo} alt="" />
      <h2><span>Reval </span>World</h2>
        </div>
        <main>
        <ul>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
      </ul>
      <ul>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
      </ul>
      <ul>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
      </ul>
      </main>
      <h5>example123@reval.com <img src={logo} alt="" /></h5>
      </div>
    </footer>
  )
}

export default Footer
