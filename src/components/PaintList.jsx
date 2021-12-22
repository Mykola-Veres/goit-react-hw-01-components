import Painting from "./Paintings";

function PaitingList ({items}) {
  return (
  <ul>
    {items.map((item)=>
    <li key={item.id}>
      <Painting      
      url={item.url}
      title={item.title}
      price={item.price}
      quantity={item.quantity}
      />
    </li>
    )}
  </ul>)
}
export default PaitingList

// PaitingList.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//   }),
//   )
// }