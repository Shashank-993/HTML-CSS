import React from 'react'
import sedan from "../images/icon-sedans.svg"
import suv from "../images/icon-suvs.svg"
import luxury from "../images/icon-luxury.svg"
import LearnMore from './LearnMore'
import Cols from './Cols'
import { useState } from 'react'
const Columns = () => {
    const [items, setItems] = useState([
      {
        id: "1",
        icon: sedan,
        type: "SEDANS",
        use: "Choose a sedan for ites affordability and excellent fuel economy. Ideal fro cruising in the city or on your next road trip. ",
      },
      {
        id: "2",
        icon: suv,
        type: "SUVS",
        use: "Take an SUV for its spacious interior, power and versatality. Perfect for your next family vacation and off-road adventures.",
      },
      {
        id: "3",
        icon: luxury,
        type: "LUXURY",
        use: "Cruise in the best car brands without the bloated prices.Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      },
    ]);
  return (
    <section className="container mx-auto max-w-lg lg:max-w-5xl min-h-full grid grid-cols-1 lg:grid-cols-3 text-(length:--fs--0) rounded-xl overflow-hidden">
      {items.map((item) => (
        
        <Cols 
            id={item.id}
            icon={item.icon}
            type={item.type}
            use={item.use}
        />
      ))}
      
    </section>
  );
}

export default Columns