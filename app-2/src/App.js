import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonList from './components/PokemonList'
import './App.css'

function App() {
  const [pokeList, setPokeList] = useState([])
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => {
      setPokeList(res.data.results)
    })
  }, [])

  return(
    <div className='App'>
      {pokeList.map((pokemon, index) => {
          return <PokemonList name={pokemon.name} key={index}
          />
      })}
    </div>
  )
}

export default App 