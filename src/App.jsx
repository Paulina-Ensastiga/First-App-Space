import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Astros from './components/Astros/Astros';
import Apod from './components/Apod/Apod';
import Appbar from './components/Appbar/Appbar';
import './App.css'
import {Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';


//Constante de login
const isLogged = true;

const userData={
  name:'Paulina',
  age:'24'
}

//Link para Personas en el espacio
//Link para API NASA
//Logo /Link para Login o para ver perfil

const links = [
  {
    "name": 'ASTROS',
    "link": 'astros'
  },
  {
    "name": 'APOD',
    "link": 'apod'
  }
]

  //NAVBAR
  
  //APOD Foto del día según al NASA

  //MAIN ---ruta: /
  //Astros --- ruta: /astros
  //APOD  --- ruta: /apod


//Constante de login
;
//Guardamos en localStorage
localStorage.setItem('login', isLogged)



function App() {
  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(isLogged))
  }, [isLogged])
  



  return (
    <>
      <Navbar 
      links= {links}
      isLogged ={JSON.parse(localStorage.login)}
      />
      <Routes>
        <Route 
          path ='/'
          element={<Main {...userData}  /> } 
         />
        <Route
          path = '/astros' 
          element={<Astros />} 
        />
        <Route
          path ='/apod'
          element ={<Apod/>}
        />

      </Routes>
    
   </>
  )
  }

//Puede ser que userData sea desde una base de datos/
export default App