import React from 'react';
import { useState } from 'react';

function AccordionSection({ label, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="accordion" onClick={() => setIsOpen(!isOpen)}>
        {label}
      </button>
      <div className="panel" style={{ display: isOpen ? 'block' : 'none' }}>
        <p>{content}</p>
      </div>
    </>
  );
}

function Charcuterie({board}) {

    return (

        <div id ="charcuterieboard">
                <h3>Your Board</h3>
                
                <div className="boardelements">
                <AccordionSection label={`Bread/Cracker – ${board.biscuitName}`}  content={board.biscuitInfo}     />
                <AccordionSection label={`Spread – ${board.spreadName}`} content={board.spreadInfo} />
                <AccordionSection label={`Meat – ${board.meatName}`} content={board.meatInfo} />
                <AccordionSection label={`Fruit – ${board.fruitName}`} content={board.fruitInfo} />
                <AccordionSection label={`Complimentary Cheeses – ${board.compCheese1} and ${board.compCheese2}`} content={board.compCheeseInfo} />
                <AccordionSection label={`Salty Supplements – ${board.saltyOptions}`} content={board.saltyInfo} />
                <AccordionSection label={`Sweet Treat – ${board.sweetName}`} content={board.sweetInfo} />
                <AccordionSection label={`Wine – ${board.wineName}`} content={board.wineInfo} />            
                </div>
              

            </div>
           


    )

}


export default Charcuterie