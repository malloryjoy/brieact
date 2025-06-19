import { useState } from 'react'
import React from 'react';
import SelectCheese from './selectCheese';
import FilterBoard from './FilterBoard';

class MyForm extends React.Component {
    render() {
        
      return (<>
      
        <section>
            <form>
            <SelectCheese />
            <FilterBoard />
            <p style={{textAlign: "center"}}><a href="/charcuterieboard.html"><input  type="submit" value="CHEESE IT!" id="startmeup" className="front cbbuttons "/></a></p> 
            </form>
        </section>
        </>)
    }
  }

  export default MyForm