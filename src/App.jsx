import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import MyForm from './components/myForm';


function App() {
  

  return (<>
      <div>
      
    

               <MyForm />
            
            
           
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      
      
      <h1>Vite + React Mallory says hello! </h1>
     </div>
    </>
  )
  
}


export default App
