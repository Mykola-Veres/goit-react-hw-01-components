import PropTypes from 'prop-types';
import logo512 from "./logo512.png"

export default function Painting({
  url = logo512,
  title,
  price ="unable",
  quantity
}) {
  return (   
    <section>
      <img src={url} width="700" />
      {title && <h2>{title}</h2>}
      <div>{price}Green card</div>
      <div>USA</div>
      <p>how many:{quantity > 10 ? "many" : "less"}</p>
    </section>
    
  )
}
Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
}