import './WhatIsUPVC.scss';
import img from '../../assets/upvc/upvc3.png'

export const WhatIsUPVC = () => {
  return (
    <div className='what'>
        <div className="txt">
            <h1>What is UPVC?</h1>
            <ul>
                <li>A type of PVC (Polyvinyl Chloride) but without added plasticizers, making it rigid and durable.</li>
                <li>Widely used in windows, doors, and building materials due to its strength, resistance, and low maintenance.</li>
                <li>Unlike traditional PVC, it does not bend easily, making it ideal for structural applications.</li>
            </ul>
            <div className="note">
                <p>uPVC is a modern, sustainable building material that delivers durability, energy efficiency, and low maintenance, making it highly valuable to contractors (ease, compliance, cost savings) and customers (comfort, savings, durability, aesthetics).</p>
            </div>
        </div>

        <div className="img">
            <img src={img} alt="" />
        </div>
    </div>
  )
}
