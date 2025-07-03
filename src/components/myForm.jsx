import { useState } from 'react'
import React from 'react';
import SelectCheese from './selectCheese';
import FilterBoard from './FilterBoard';





function MyForm ({myCheese, setMyCheese, setShowBoard, setShowForm, myFilters, setMyFilters}) {

  
  
  
  

  const handleCheckboxChange = (event) =>{
    const {value, checked } = event.target;
    if (checked) {
      setMyFilters(prev => [...prev, value]);
    } else{
      setMyFilters(prev => prev.filter(item => item !== value));
    }
  }

 
 
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowBoard(true);
    setShowForm(false);
    
    
    
    console.log(`You selected: ${myCheese} and the following filters: ${myFilters.join(", ")}`);
    console.log(`Here are your filters: ${myFilters}`);

    
  }

    
        
      return (<>
      
        <form onSubmit={handleSubmit}>
            <SelectCheese myCheese={myCheese} setMyCheese={setMyCheese}/>
            
            <FilterBoard handleCheckboxChange={handleCheckboxChange}/>
            <p style={{textAlign: "center"}}><input  type="submit" value="CHEESE IT!" id="startmeup" className="front cbbuttons " /></p> 
            </form>
       
        </>)
    
  }

  export default MyForm