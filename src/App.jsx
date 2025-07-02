import { useState } from 'react'
{/**import './App.css'*/}
import React from 'react';
import MyForm from './components/myForm';
import Board from './Board.jsx'




/*if submitted == true {
  show Board
}

else {
  show Form
} 
  

LOOK UP USE STATE PROCESS I KNOW YOU ALREADY DID THAT BUT IT'S OVER THERE */

function App() {
  const [myCheese, setMyCheese] = useState('');
  const [showBoard, setShowBoard] = useState(false);
  
  return (<>
      <div>
      
    

               <MyForm myCheese={myCheese} setMyCheese={setMyCheese} setShowBoard={setShowBoard}/>
               {showBoard && <Board myCheese={myCheese}/>}
            
            
           
      
      
      
     </div>
    </>
  )
  
}


export default App
