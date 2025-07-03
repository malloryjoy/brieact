import { useState } from 'react'
{/**import './App.css'*/}
import React from 'react';
import MyForm from './components/myForm';
import Board from './Board.jsx'



function App() {
  const [myCheese, setMyCheese] = useState('');
  const [showBoard, setShowBoard] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [myFilters, setMyFilters] = useState([]);

  const toggleVisibility = () =>{
    setShowForm(!showForm)
  };

  const handleReset = () => {
    setShowBoard(false);
    setMyCheese('');
    setMyFilters([]);
  };

  
  
  return (<>
      <div>

      <nav id="topNav" className="goback">
        <ul className="siteNav">
          <li className="navItem">
            {showBoard ? (
              <a href="#" onClick={handleReset}>
                <i className="fa-solid fa-arrow-left"></i>
              </a>
            ) : (
              <a href="/index.html" aria-label="Return to portfolio">
                <i className="fa-solid fa-arrow-left"></i>
              </a>
            )}
            <span className="chooseJS">
              {showBoard ? 'Generate New Board' : 'Return to Landing'}
            </span>
          </li>
        </ul>
      </nav>
      
    

               {showForm && <MyForm myCheese={myCheese} setMyCheese={setMyCheese} setShowBoard={setShowBoard} setShowForm={setShowForm} myFilters={myFilters} setMyFilters={setMyFilters}/>}
               {showBoard && <Board myCheese={myCheese} myFilters={myFilters}/>}
            
            
           
      
      
      
     </div>
    </>
  )
  
}


export default App
