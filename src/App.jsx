import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
  
  const [submitted,setSubmitted] = useState(false);
  return (<>
      <div>
      
    

               <MyForm />
               <Board />
            
            
           
      
      
      
     </div>
    </>
  )
  
}


export default App
