import { useState } from 'react'
import './App.css'
import React from 'react';
import MyForm from './components/myForm';
import SelectCheese from './components/selectCheese';
import FilterBoard from './components/FilterBoard';
import theBoards from './theBoards';


{/*THIS IS THE FILE IN WHICH WE TAKE THE MYCHEESE VARIABLE AND THE FILTER VARIABLE 
  AND USE THEM TO DETERMINE WHICH BOARD THEY GET AND WHAT IT DOES OR DOESN'T INCLUDE*/}
function Charcuterie (myCheese, myFilter)  {
  const theCheese = JSON.stringify(myCheese);
  const theFilter = JSON.stringify(myFilter);
  let myBoard;
  if (theCheese == "american"){
    return myBoard = theBoards.american;
  }
  if (theFilter.includes('zero-proof')){
    //remove wine option from selected board 
  }
//continue if/else statements for each board 
//add boardFilter constant that stringify filter 
//if boardFilter contains nut free, remove nut value, if it contains zeroproof, remove alcohol, if it contains vegetarian, remove meat
//next step will be how to break apart the Charcuterie board block into separate sections; as of now 
//Charcuterie returns the entire object with key/pair values and the values need to be able to go into different spots across the page. 
//following step will be building out cB html page and including/injecting the respective component value in the correct place like <Charcuterie 
  
}
  



export default Charcuterie