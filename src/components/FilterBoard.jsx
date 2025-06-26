import { useState } from 'react'
import React from 'react';

class FilterBoard extends React.Component {
    render() {
      return (<><section id="filter">
      <h3 style={{textAlign: "left", fontSize: "1.25em", color:"white"}}>And Make It...</h3><br />
      <div id="inputSection" style={{float: "left"}}>
      <input type="checkbox" id="filter1" name="filter1" value="Vegetarian" /><label htmlFor="filter1"> Vegetarian</label> {/*vegetarian*/}
      <input type="checkbox" id="filter2" name="filter2" value="Nut-Free" /><label htmlFor="filter2"> Nut-Free</label> {/*nutFree*/}
      <input type="checkbox" id="filter3" name="filter3" value="Zero-Proof" /><label htmlFor="filter3"> Zero-Proof</label>{/*zeroProof*/}
      </div></section>
      </>)
    }
  }

  export default FilterBoard