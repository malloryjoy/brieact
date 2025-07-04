import { useState } from 'react'
import React from 'react';

class FilterBoard extends React.Component {
    render() {
      const { handleCheckboxChange } = this.props;
      return (<><section id="filter">
      <h3 style={{textAlign: "left", fontSize: "1.25em", color:"white"}}>And Make It...</h3><br />
      <div id="inputSection" >
      <label htmlFor="filter1"><input type="checkbox" id="filter1" name="filter1" onChange={handleCheckboxChange} value="Vegetarian" /> Vegetarian</label> {/*vegetarian*/}
      <label htmlFor="filter2"><input type="checkbox" id="filter2" name="filter2" onChange={handleCheckboxChange} value="Nut-Free" /> Nut-Free</label> {/*nutFree*/}
      <label htmlFor="filter3"><input type="checkbox" id="filter3" name="filter3" onChange={handleCheckboxChange} value="Zero-Proof" /> Zero-Proof</label>{/*zeroProof*/}
      </div></section>
      </>)
    }
  }

  export default FilterBoard