import "./AllProductsInfo.scss";

export const AllProductsInfo = () => {
  return (
    <div className="AllProductsInfo">
      <div className="txt">
        <h1>Why Matter?</h1>
      </div>

      <div className="list">
        <div className="resason">
          <div className="top">
            <h3>Comfort & savings</h3>
          </div>
          <p>Better insulation, noise reduction, and lower energy bills.</p>
        </div>

        <div className="resason">
          <div className="top">
            <h3>Aesthetics</h3>
          </div>
          <p>Sleek, modern window/door systems that enhance property value.</p>
        </div>

        <div className="resason">
          <div className="top">
            <h3>Security</h3>
          </div>
          <p>
            Strong frames and selective models with enhanced locking systems.
          </p>
        </div>

        <div className="resason">
          <div className="top">
            <h3>Usability</h3>
          </div>
          <p>Smooth sliding, wide openings, and easy handling.</p>
        </div>
      </div>
    </div>
  );
};
