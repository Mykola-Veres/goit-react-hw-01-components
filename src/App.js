import Painting from "./components/Paintings"
import PaitingList from "./components/PaintList"
import paintings from "./paintings.json"
import Section from "./components/Section"

// const paint = paintings[1]

export default function App() {
  return (  
    <div>
      <Section title="Top day">
        {<PaitingList items={paintings} />}
      </Section>
    </div>
  

    // <section>
    //   {paintings.map((paint) => 
    //   <Painting
    //   key={paint.id}
    //   url={paint.url}
    //   title={paint.title}
    //   price={paint.price}
    //   quantity={paint.quantity}
    //   />)}        
    // </section>    
  )
}
