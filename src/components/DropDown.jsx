import { useState } from 'react'
import React from 'react';




function DropDown({ myCheese, setMyCheese }) {
  
  const handleChange = (event) => {setMyCheese(event.target.value)};
 
  
    return (<><div className="dropdown">
      
    <select value={myCheese} onChange={handleChange} id="cheeseOptions" name="cheeseOptions" >
          <option value="default">Select Your Cheese</option>
          <option value="American">American</option>
          <option value="Asiago">Asiago</option>
          <option value="Boursin">Boursin</option>
          <option value="Brie">Brie</option>
          <option value="Camembert">Camembert</option>
          <option value="Cheddar">Cheddar</option>
          <option value="Chévre">Chévre</option>
          <option value="Colby">Colby</option>
          <option value="Comté">Comté</option>
          <option value="Edam">Edam</option>
          <option value="Feta">Feta</option>
          <option value="Fontina">Fontina</option>
          <option value="Gorgonzola">Gorgonzola</option>
          <option value="Gouda">Gouda</option>
          <option value="Gruyere">Gruyére</option>
          <option value="Havarti">Havarti</option>
          <option value="Jarlsberg">Jarlsberg</option>
          <option value="Manchego">Manchego</option>
          <option value="MontereyJack">Monterey Jack</option>
          <option value="Parmesan">Parmesan</option>
          <option value="Provolone">Provolone</option>
          <option value="Roquefort">Roquefort</option>
          <option value="Stilton">Stilton</option>
          <option value="Swiss">Swiss/Emmental</option>
          <option value="Wensleydale">Wensleydale</option>
      </select></div>
      </>)
    }
    
  

  export default DropDown