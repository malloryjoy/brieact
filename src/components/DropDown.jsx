import { useState } from 'react'
import React from 'react';

class DropDown extends React.Component {
    render() {
      return (<><div className="dropdown">
      <select id="cheeseOptions" name="cheeseOptions">
          <option value="default" disabled selected>Select Your Cheese</option>
          <option value="american">American</option>
          <option value="asiago">Asiago</option>
          <option value="boursin">Boursin</option>
          <option value="brie">Brie</option>
          <option value="camembert">Camembert</option>
          <option value="cheddar">Cheddar</option>
          <option value="chévre">Chévre</option>
          <option value="colby">Colby</option>
          <option value="comté">Comté</option>
          <option value="edam">Edam</option>
          <option value="feta">Feta</option>
          <option value="fontina">Fontina</option>
          <option value="gorgonzola">Gorgonzola</option>
          <option value="gouda">Gouda</option>
          <option value="gruyere">Gruyére</option>
          <option value="havarti">Havarti</option>
          <option value="jarlsberg">Jarlsberg</option>
          <option value="manchego">Manchego</option>
          <option value="montereyJack">Monterey Jack</option>
          <option value="parmesan">Parmesan</option>
          <option value="provolone">Provolone</option>
          <option value="roquefort">Roquefort</option>
          <option value="stilton">Stilton</option>
          <option value="swiss">Swiss/Emmental</option>
          <option value="wensleydale">Wensleydale</option>
      </select></div>
      </>)
    }
  }

  export default DropDown