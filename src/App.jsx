import { useState } from 'react'

import Noticia from './components/Noticia'
import './App.css'

function App() {

    const noticia =[{
      id:1,
      titulo: "Título 1",
      fecha: "22 de octubre del 2024",
      alt:"se ve un atardecer",
      opinion:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      avatarurl:'/avatar01.png',
      imageurl: '/sky.jpg',
    },
    {
      id:2,
      titulo: "Título 2",
      fecha: "22 de octubre del 2024",
      alt:"se ve el mar",
      opinion:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      avatarurl:'/avatar02.png',
      imageurl: '/sea.jpg',
    },
    {
      id:3,
      titulo: "Título 3",
      fecha: "22 de octubre del 2024",
      alt:"se ve un I love Tux",
      opinion:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      avatarurl:'/avatar03.png',
      imageurl: '/tux.jpg',
    },
    {
      id:4,
      titulo: "Título 4",
      fecha: "22 de octubre del 2024",
      alt:"se ve una ilustracion de mario",
      opinion:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      avatarurl:'/avatar04.png',
      imageurl: '/mario.jpg',
    }]
  
  
    return (
      <>
        {noticia.map((p) =>
          <Noticia key={p.id}
                      titulo={p.titulo}
                      fecha={p.fecha}
                      opinion={p.opinion}
                      avatarurl={p.avatarurl}
                      imageurl={p.imageurl}
                      alt={p.alt}
        
        
        />)
      
      }
  
      </>    
    )
  }
  
  export default App