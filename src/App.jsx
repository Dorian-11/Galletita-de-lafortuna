import React, { useState } from 'react'
import './App.css' 
/* Boton */
import Button from './components/Button'
/*  Mensaje*/
import Message from './components/Message'
/* FRASES  */
import phrases from './assets/data/phrases.json'
import fondo5 from './assets/fondo5.png'
import fondo1 from './assets/fondo1.jpg'
import fondo2 from './assets/fondo2.jpg'
import fondo3 from './assets/fondo3.jpg'
import fondo4 from './assets/fondo4.jpg'
import fondo6 from './assets/fondo6.png'
import fondo7 from './assets/fondo7.png'


function App() {
 

  
  const  [ Pasar , setPasar] = useState (0) 
  const [Pasarfondo , setPasarfondo] = useState (0)
  /* En esta constante ya es para que funcione el boton */
    const arregloFondos = [
      fondo1,
      fondo2,
      fondo3,
      fondo4,
      fondo5,
      fondo6,
      fondo7,
    ]
    const movimiento = () => {
      setPasar (Math.floor(Math.random()*phrases.length))
      setPasarfondo(Math.floor(Math.random()*arregloFondos.length))
    }



    
   /*  style={{backgroundImage:'url(/fondom-2.png)'}} */

  return (
    <div className="App" style={{backgroundImage:'url('+arregloFondos[Pasarfondo]+')'}} >
      <h1 className='title'  >GALLETAS DE LA FORTUNA</h1>



    {/* Mensaje */}
      <Message 
      phrasesData= {phrases[Pasar].phrase} 
              Frases = {phrases[Pasar].author}

      />
          
      <Button  buttonData={movimiento}/>

    </div>
  )
}

export default App
