import React from 'react'
import { useFragment } from 'react-relay'
import graphql from 'babel-plugin-relay/macro';

// Displays a single box containing an image & info about a pokemon
export default function PokemonListItem(props) {
    const pokemon = useFragment(
      graphql`
        fragment PokemonListItem on pokemon_v2_pokemon {
          name
          _id: id
          abilities: pokemon_v2_pokemonabilities {
            ability: pokemon_v2_ability {
              name
            }
          }
          types: pokemon_v2_pokemontypes {
            type: pokemon_v2_type {
              name
            }
          }
      }`, 
      props.pokemon
    )

    const hidden = !pokemon.name.toLowerCase().includes(props.searchTerm)
    
    // Replace - with space
    // Capitalize each seperate word
    function formatString(str) {
      const arr = str.split('-')
      const arr2 = arr.map(elem => elem.charAt(0).toUpperCase() + elem.slice(1))
      return arr2.join(' ')
    }  
   
  return (
    <div hidden={hidden} className='PokemonListItem' onClick={(e)=>{
      e.preventDefault()
      props.setCurrentId(pokemon._id)
      props.setPokemonHasChanged(true)
    }
      } key={pokemon._id}>
          <div className='PokemonListItemRow'>
            <span>
              <img width="80px" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + pokemon._id + ".svg"} alt={"" + pokemon.name}></img>
            </span>
            <span className='test'>
              <div className='PokemonListItemName'>{formatString(pokemon.name)}</div>
              <div><span className='Label'>type: </span>{pokemon.types.map((elem, id) => <span className='Type' key={id}>{formatString(elem.type.name)}</span>)}</div>
            </span>
          </div>
          <hr />        
          <div className='PokemonListItemRow'><span className='Label'>abilities: </span>{pokemon.abilities.map((elem, id) => <span className='Type' key={id}>{formatString(elem.ability.name)}</span>)}</div>   
    </div>
  )
}
