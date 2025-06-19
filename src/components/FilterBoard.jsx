import { useState } from 'react'
import React from 'react';

class FilterBoard extends React.Component {
    render() {
      return (<><section id="filter">
      <h3 style={{textAlign: "left", fontSize: "1.25em", color:"white"}}>And Make It...</h3><br />
      <div id="inputSection">
      <input type="checkbox" id="filter1" name="filter1" value="vegetarian" /><label HTMLfor="filter1"> Vegetarian</label>
      <input type="checkbox" id="filter2" name="filter2" value="nutfree"/><label HTMLfor="filter2"> Nut-Free</label>
      <input type="checkbox" id="filter3" name="filter3" value="zeroproof"/><label HTMLfor="filter3"> Zero-Proof</label>
      </div></section>
      </>)
    }
  }

  export default FilterBoard