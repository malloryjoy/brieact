import { useState } from 'react'
import React from 'react';
import DropDown from './DropDown';



class SelectCheese extends React.Component {
  
    render() {
      const { myCheese, setMyCheese } = this.props;
      return (<><section id="searchBox">
        <label className="searchBar" htmlFor="cheese">First, tell us the cheese you want to use.</label><br />
        <DropDown myCheese={myCheese} setMyCheese={setMyCheese} />
      </section>
      </>)
    }
  }

  export default SelectCheese