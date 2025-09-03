
const productDisplay = (props) => {
  return (
    <div>
      <img src={props.img} alt="" />
      <div className="info">
        <h1>{props.title}</h1>
        <h3>{props.des}</h3>
        <p>{props.price} JOD</p>
      </div>
    </div>
  )
}

export default productDisplay
