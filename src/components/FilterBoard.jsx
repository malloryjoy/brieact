import { useState } from 'react'
import React from 'react';

class FilterBoard extends React.Component {
    render() {
      return (<><section id="filter">
      <h3 style={{textAlign: "left", fontSize: "1.25em", color:"white"}}>And Make It...</h3><br />
      <div id="inputSection">
      <input type="checkbox" id="filter1" name="filter1" value="Vegetarian" checked={this.props.selectedFilters.includes("Vegetarian")}
  onChange={(e) => this.props.onChange(e.target.value)}/><label htmlFor="filter1"> Vegetarian</label> {/*vegetarian*/}
      <input type="checkbox" id="filter2" name="filter2" value="Nut-Free" checked={this.props.selectedFilters.includes("Nut-Free")}
  onChange={(e) => this.props.onChange(e.target.value)}/><label htmlFor="filter2"> Nut-Free</label> {/*nutFree*/}
      <input type="checkbox" id="filter3" name="filter3" value="Zero-Proof" checked={this.props.selectedFilters.includes("Zero-Proof")}
  onChange={(e) => this.props.onChange(e.target.value)}/><label htmlFor="filter3"> Zero-Proof</label>{/*zeroProof*/}
      </div></section>
      </>)
    }
  }

  export default FilterBoard