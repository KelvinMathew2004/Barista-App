import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import BaristaForm from './Components/BaristaForm.jsx';
import Carton from './assets/image.png'

function App() {
  
  return (
    <div className="tite-container">
      <div className="header">
        <div>
          <img src={Carton} className='carton-image'/>
          <h1 className="title">On My Grind</h1> 
        </div>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm />
    </div>
  )
}

export default App
