import "./AllProductsInfo.scss";

export const AllProductsInfo = () => {
  return (
    <div className="AllProductsInfo">
      <div className="txt">
        <h1>Why Matter?</h1>
      </div>

      <div className="list">
        <div className="reason">
          <div className="top info">
            <h3>Comfort & savings</h3>
          </div>
          <p className="info">Better insulation, noise reduction, and lower energy bills.</p>
        </div>

        <div className="reason">
          <div className="top info">
            <h3>Aesthetics</h3>
          </div>
          <p className="info">Sleek, modern window/door systems that enhance property value.</p>
        </div>

        <div className="reason">
          <div className="top info">
            <h3>Security</h3>
          </div>
          <p className="info">
            Strong frames and selective models with enhanced locking systems.
          </p>
        </div>

        <div className="reason">
          <div className="top info">
            <h3>Usability</h3>
          </div>
          <p className="info">Smooth sliding, wide openings, and easy handling.</p>
        </div>
      </div>
    </div>
  );
};
