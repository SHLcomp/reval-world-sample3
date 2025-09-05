import "./Latest.scss";
import data from "../../data/avColors";
import Product from "../product/Product";
const Latest = () => {
  return (
    <div className="colors">
      <div className="text">
        <p>Reval Colors </p>
        <h1>We Have 20 and more Colors</h1>
      </div>

      <div className="colors-coll">
        {data.map((item, i) => {
          return (
            <div className="color">
              <div
                key={i}
                className="circle"
                style={{
                  "--img": `url(${item.img})`,
                  "--color": item.colorCode,
                }}
              ></div>
              <h5>{i.colorName}</h5>
            </div>
          );
        })}
      </div>
        <h4 className="cta">View All</h4>
    </div>
  );
};

export default Latest;
