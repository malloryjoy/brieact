import React from 'react';
import { useState } from 'react';

function AccordionSection({ label, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="accordion" 
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <span>{label}</span>
        <span style={{ fontSize: "1.5em", marginLeft: "10px" }}>
          {isOpen ? "\u2038" : "\u032c"}
        </span>
      </button>
      <div className="panel" style={{ display: isOpen ? 'block' : 'none' }}>
        <p>{content}</p>
      </div>
    </>
  );
}



function Charcuterie({board, myFilters}) {
  const veg = myFilters.includes("Vegetarian");
  const nutFree = myFilters.includes("Nut-Free");
  const zeroProof = myFilters.includes("Zero-Proof");
  const badge = myFilters.join(", ");

    return (

        <div id ="charcuterieboard">
                <h3>Your Board</h3>
                <p id="badge">{badge}</p>
                <div className="boardelements">
                <AccordionSection label={`Bread/Cracker – ${board.biscuitName}`}  content={board.biscuitInfo}     />
                <AccordionSection label={`Spread – ${board.spreadName}`} content={board.spreadInfo} />
                {!veg  && <AccordionSection label={`Meat – ${board.meatName}`} content={board.meatInfo} />}
                <AccordionSection label={`Fruit – ${board.fruitName}`} content={board.fruitInfo} />
                <AccordionSection label={`Complimentary Cheeses – ${board.compCheese1} and ${board.compCheese2}`} content={board.compCheeseInfo} />
                {!(nutFree && board.hasNuts)  && <AccordionSection label={`Salty Supplements – ${board.saltyOptions}`} content={board.saltyInfo} />}
                <AccordionSection label={`Sweet Treat – ${board.sweetName}`} content={board.sweetInfo} />
                {!zeroProof && <AccordionSection label={`Wine – ${board.wineName}`} content={board.wineInfo} />   }         
                </div>
              

            </div>
           


    )

}


export default Charcuterie