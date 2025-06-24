import { useState } from 'react'
import React from 'react';
import SelectCheese from './selectCheese';
import FilterBoard from './FilterBoard';





class MyForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myCheese: '',
      myFilter: [],
    };
  }

  handleChange = (field, value) => {
    this.setState({ [field]: value });
  };

  handleFilterChange = (filterName) => {
    this.setState((prevState) => {
      const { myFilter } = prevState;
      if (myFilter.includes(filterName)) {
        // Remove it
        return { myFilter: myFilter.filter((f) => f !== filterName) };
      } else {
        // Add it
        return { myFilter: [...myFilter, filterName] };
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { myCheese, myFilter } = this.state;
    const result = `You selected ${myCheese} with the following filters: ${myFilter.join(', ')}`;
    alert(result);
  };

 

    render() {
        
      return (<>
      
        <section>
            <form onSubmit={this.handleSubmit}>
            <SelectCheese 
  myCheese={this.state.myCheese} 
  onChange={(val) => this.handleChange('myCheese', val)} 
/>
            <FilterBoard
               selectedFilters={this.state.myFilter}
               onChange={this.handleFilterChange}
/>
            <p style={{textAlign: "center"}}><a href="/charcuterieboard.html"><input  type="submit" value="CHEESE IT!" id="startmeup" className="front cbbuttons "/></a></p> 
            </form>
        </section>
        </>)
    }
  }

  export default MyForm