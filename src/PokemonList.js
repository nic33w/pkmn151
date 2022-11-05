import React, { useState } from 'react'
import PokemonListItem from './PokemonListItem'

// The component displays a search bar & the list of Pokemon as PokemonListItem's
export default function PokemonList(props) {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className='PokemonList'>
        <input className='search' type='text' onChange={(e)=>setSearchTerm(e.target.value.toLowerCase())}/>
        <div>
        {props.pokemons.map((element, id) => 
            <PokemonListItem setCurrentId={props.setCurrentId} key={id} pokemon={element} setPokemonHasChanged={props.setPokemonHasChanged} searchTerm={searchTerm} />
        )}
        </div>
    </div>
  )
}
