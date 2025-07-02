import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
{/*import './index.css'*/}
import App from './App.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)


{/*So App is the form that asks users to provide the cheese and the filters, and Board is the cheese
  board that is generated from their answers. If I'm loading everything on one page, how and where 
  should I say to hide the Board section when the App is open and vice versa? I would think adding 
  an Event Listener to the App's submit button would do the trick, but I feel like there needs to be an
  initializer that hides the Board when you open the page*/}



