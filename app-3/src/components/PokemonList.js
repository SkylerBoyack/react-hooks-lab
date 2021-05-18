import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const PokemonList = () => {
  const [pokeList, setPokeList] = useState([])
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => {
      setPokeList(res.data.results)
    })
  }, [])

  return(
    <div className='PokemonList'>
      {pokeList.map((pokemon) => {
          return (
        <Link key={pokemon.url} to={`/pokemon/${pokemon.name}`}>
            <h2>{pokemon.name}</h2>
        </Link> 
        )
      })}
    </div>
  )
}

export default PokemonList