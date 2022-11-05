import React from 'react'
import { useFragment } from 'react-relay'
import graphql from 'babel-plugin-relay/macro';
import { Canvas } from '@react-three/fiber';
import PokemonCircle from './PokemonCircle';
import PokemonStats from './PokemonStats';

// Contains the left/bottom panel of a Pokemon spinning circle image (PokemonCircle) & the colored bars (PokemonStats)
export default function PokemonThree(props) {
    const pokemon = useFragment(
        graphql`
            fragment PokemonThree on pokemon_v2_pokemon {
                stats: pokemon_v2_pokemonstats {
                    base_stat
                }
            }`, 
        props.pokemon
    )
    const stats = [pokemon.stats[0].base_stat, pokemon.stats[1].base_stat, pokemon.stats[2].base_stat, pokemon.stats[5].base_stat]
    
    return (
    <div className='ThreeContainer'>
        <div className='CircleContainer'>
        
            <Canvas camera={{ fov: 40, near: 1, far: 20, position: [0, 0, 10]  }} linear flat>
                <ambientLight intensity={.7} />
                <directionalLight intensity={0.7} position={[5, 5, 1]} />
                <PokemonCircle currentId={props.currentId} />   
            </Canvas>
            
        </div>

        <div className='StatsContainer'>
            <Canvas camera={{ fov: 50, near: 1, far: 20, position: [0, 0, 10]  }} linear flat>
                <ambientLight intensity={.7} />
                <directionalLight intensity={0.7} position={[5, 5, 1]} />
                <PokemonStats pokemon={pokemon} pokemonHasChanged={props.pokemonHasChanged} setPokemonHasChanged={props.setPokemonHasChanged} />
                
            </Canvas>
            
            <div className='BarDescriptions'>
                <div style={{'color': 'lime'}}>
                    <div>Health</div>
                    <div>{stats[0]}</div>
                </div>
                <div style={{'color': 'orange'}}>
                    <div>Attack</div>
                    <div>{stats[1]}</div>
                </div>
                <div style={{'color': 'cyan'}}>
                    <div>Defense</div>
                    <div>{stats[2]}</div>
                </div>
                <div style={{'color': 'yellow'}}>
                    <div>Speed</div>
                    <div>{stats[3]}</div>
                </div>

            </div>
        </div>
    </div>
  )
}
