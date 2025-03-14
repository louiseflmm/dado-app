 
import React from 'react';
import { TbDice1, TbDice2, TbDice3, TbDice4, TbDice5, TbDice6 } from "react-icons/tb";
import './Dado.css';
 
function Dado({ valor }) {
  const icones = {
    1: TbDice1,
    2: TbDice2,
    3: TbDice3,
    4: TbDice4,
    5: TbDice5,
    6: TbDice6,
  };
 
  return (
    <div className="Dado">
      {React.createElement(icones[valor], { size: 150 })}
    </div>
  );
}
 
export default Dado;
 