import "./OtherProduct.scss";
import img from "../../assets/upvc/upvc3.webp";
import { Link } from "react-router-dom";

const OtherProduct = () => {
  return (
    <div className="otherP">
      <img src={img} alt="" />
      <div className="info">
        <div className="text">
          <p>uPVC (Unplasticized Polyvinyl Chloride</p>
          <h1>uPVC (Unplasticized Polyvinyl Chloride</h1>
          <p>
            A type of PVC (Polyvinyl Chloride) but without added plasticizers,
            making it rigid and durable.
          </p>
          <p>
            Widely used in windows, doors, and building materials due to its
            strength, resistance, and low maintenance.
          </p>
          <p>
            Unlike traditional PVC, it does not bend easily, making it ideal for
            structural applications.
          </p>
        </div>

        <div className="list">
          <h4>Why UPVC?</h4>
          <ul>
            <li>Lower Energy Bills</li>
            <li>Low Maintenance</li>
            <li>Durability</li>
            <li>Safety</li>
            <li>Eco-Friendly Choice</li>
            <li>Modern Look</li>
            <li>Property Value</li>
          </ul>
        <Link className="a" to='/reval-world-sample3/upvc'><h4 className="cta">Read More</h4></Link>
        </div>

      </div>
    </div>
  );
};

export default OtherProduct;
