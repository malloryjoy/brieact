import React from 'react';

function Charcuterie({board}) {

    return (

        <div id ="charcuterieboard">
                <h3>Your Board</h3>
                <p id="badge"></p>
                <div  className="boardelements">
                  <button  className="accordion" id="biscuitName">Bread/Cracker -  {board.biscuitName}</button>
                  <div  className="panel">
                    <p id="biscuitInfo"> {board.biscuitInfo}</p>
                  </div>
                  
                  <button   className="accordion" id="spreadName">Spread -  {board.spreadName} </button>
                  <div   className="panel">
                    <p id="spreadInfo"> {board.spreadInfo}</p>
                  </div>
                  
                  <button   className="accordion" id="meatName">Meat -  {board.meatName}</button>
                  <div   className="panel">
                    <p id="meatInfo"> {board.meatInfo}</p>
                  </div>
                  
                  <button   className="accordion" id="fruitName">Fruit -  {board.fruitName}</button>
                  <div   className="panel">
                    <p id="fruitInfo"> {board.fruitInfo}</p>
                  </div>

                  <button   className="accordion" id="cheeseName">Complementary Cheeses -  {board.compCheese1} and  {board.compCheese2}</button>
                  <div   className="panel">
                    <p id="cheeseInfo"> {board.compCheeseInfo}</p>
                  </div>

                  <button   className="accordion" id="saltyOptions">Salty Supplements -  {board.saltyOptions}</button>
                  <div   className="panel">
                    <p id="saltInfo"> {board.saltyInfo}</p>
                  </div>

                  <button   className="accordion" id="sweetName">Sweet Treat -  {board.sweetName}</button>
                  <div   className="panel">
                    <p id="sweetInfo"> {board.sweetInfo}</p>
                  </div>

                  <button   className="accordion" id="wineName">Wine -  {board.wineName}</button>
                  <div  className="panel">
                    <p id="wineInfo"> {board.wineInfo}</p>
                  </div>
              </div>
              

            </div>
           


    )

}


export default Charcuterie