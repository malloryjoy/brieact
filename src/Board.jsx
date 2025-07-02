import { useState } from 'react'
import theBoards from './theBoards';
{/*import './App.css' */}
import React from 'react';
import About from './components/About';
import Display from './components/Display';
import Charcuterie from './components/Charcuterie';


function Board({myCheese}) {
  const key = myCheese.toLowerCase();
  const board = theBoards[key];
  console.log(board);

  if (!board) return <p>ERROR</p>

    return (<>
        <div id="board">
        
        <div id="left">
  
                 <About board={board}/>
                <Display board={board}/>
        </div>

        <div id="right">
                <Charcuterie board={board}/>



        </div>
                 {/* 
                 <Contents /> **/}
              
              
             
        
        
        
       </div>
       <div id="spacer"></div>
       <section id ="permafacts">
            <h3 style={{textAlign: "center"}}>Notes on Charcuterie</h3>
            <ul style={{textAlign: "left"}}>
              <li>The stronger the cheese, the milder the cracker, and vice versa!</li>
              <li>Grapes have a sweet acidity that make it an ideal palate cleanser. They have a place on ANY AND ALL charcuterie boards!</li>
              <li>Complementary cheeses offer either a similar texture or a similar flavor. For example: if you have a hard cheese with a mild flavor, pick a softer cheese with a strong flavor and a hard cheese with a mild flavor!</li>
              <li>For extra points, consider your presentation! Fan out your bread and crackers, or even present your charcuterie meat like a <a href="https://www.youtube.com/shorts/d7PWzIS1U_g" target="_blank" aria-label="Prosciutto rose tutorial (opens in a new window)">flower</a>!</li>
              <li>Give your board extra holiday vibes with these seasonal flavors: Fresh fruits in the spring, bright berries in the summer, apple and pumpkin butter in the fall, and cranberries in the winter!</li>
            </ul>
            </section>
      </>
    )
    
  }
  
  
  export default Board
  

