import { useState } from 'react'
import React from 'react';
import DropDown from './DropDown';



class SelectCheese extends React.Component {
  
    render() {
      return (<><section id="searchBox">
        <label className="searchBar" htmlFor="cheese">First, tell us the cheese you want to use.</label><br />
        <DropDown 
            myCheese={this.props.myCheese}
            onChange={this.props.onChange} />
      </section>
      </>)
    }
  }

  export default SelectCheese