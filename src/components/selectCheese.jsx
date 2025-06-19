import { useState } from 'react'
import React from 'react';
import DropDown from './DropDown';

class SelectCheese extends React.Component {
    render() {
      return (<><section id="searchBox">
        <label className="searchBar" HTMLfor="cheese">First, tell us the cheese you want to use.</label><br />
       <DropDown />
      </section>
      </>)
    }
  }

  export default SelectCheese