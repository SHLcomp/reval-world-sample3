import img from "../../assets/upvc/upvc2.webp";
import "./WhyUPVC.scss";

export const WhyUPVC = () => {
  return (
    <div className="why">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="txt">
        <h1>Why UPVC?</h1>
        <ul>
          <li>Lower Energy Bills → Strong insulation reduces heating and cooling costs.</li>
          <li>Low Maintenance → Does not require painting, polishing, or frequent upkeep.</li>
          <li>Durability → Resistant to sunlight, moisture, termites, and pollution — ideal for long-term use.</li>
          <li>Safety → Fire-retardant and resistant to chemical reactions, ensuring a safer living environment.</li>
          <li>Eco-Friendly Choice → Recyclable and more sustainable compared to alternatives like wood.</li>
          <li>Modern Look → Comes in multiple finishes (white, laminated, wood-effect) to match aesthetics.</li>
          <li>Property Value → Adds value by improving performance, efficiency, and sustainability of buildings.</li>
        </ul>

        <div className="note">
            <h3>Why uPVC is Important Overall</h3>
            <ul>
                <li>Combines strength, energy efficiency, and low environmental impact.</li>
                <li>Offers long-term cost savings for both contractors and customers.</li>
                <li>Fits with the global trend towards sustainable, green building materials.</li>
            </ul>
        </div>
      </div>
    </div>
  );
};
export default WhyUPVC;
