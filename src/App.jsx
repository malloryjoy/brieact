import { useState } from 'react'
{/**import './App.css'*/}
import React from 'react';
import MyForm from './components/myForm';
import Board from './Board.jsx'



function App() {
  const [myCheese, setMyCheese] = useState('');
  const [showBoard, setShowBoard] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const toggleVisibility = () =>{
    setShowForm(!showForm)
  };
  
  
  return (<>
      <div>
      
    

               {showForm && <MyForm myCheese={myCheese} setMyCheese={setMyCheese} setShowBoard={setShowBoard} setShowForm={setShowForm} />}
               {showBoard && <Board myCheese={myCheese}/>}
            
            
           
      
      
      
     </div>
    </>
  )
  
}


export default App
