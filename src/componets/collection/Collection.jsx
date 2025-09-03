import './Collection.scss';
// import img1 from '../../assets/bg4.jpg' //first one
// import img2 from '../../assets/bg5.jpg' //2nd one
// import img3 from '../../assets/bg1.png' //before last
// import img4 from '../../assets/bg2.png' //last one water
import data from '../../data/collectionData'
import { Link } from 'react-router-dom';
const Collection = () => {
  return (
    <div className='collections'>
      {/* elements of the grid */}
      
    {data.map((item)=>{
      return(
        <Link className='a' to={item.path}>
        <div className={`collection box ${item.className}`}>
        <img src={item.img} alt="" />
        <h3 className='cta'>{item.name}</h3>
      </div>
        </Link>
      )
    })}

    <div className="collection box2">
        <p>Explore at Fobish</p>
        <h1>Our <span>Worldwide</span> Collections</h1>
      </div>





    </div>
  )
}

export default Collection
