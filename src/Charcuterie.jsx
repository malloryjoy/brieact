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
  const myBoard = JSON.stringify(myCheese);
  if (myBoard == "american"){
    return theBoards.american;
  }
//continue if/else statements for each board 
//add boardFilter constant that stringify filter 
//if boardFilter contains nut free, remove nut value, if it contains zeroproof, remove alcohol, if it contains vegetarian, remove meat
//next step will be creating each object/Charcuterie board
//following step will be building out cB html page and including/injecting the respective component value in the correct place like <Charcuterie 
  
}
  



export default Charcuterie