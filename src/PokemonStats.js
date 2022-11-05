import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

// Displays the 3D colored vertical bars in the left/bottom panel (PokemonThree.js)
export default function PokemonStats(props) {
    const myMesh = useRef()
    const lerpTime = 1
    const pokemon = props.pokemon
    //console.log(pokemon)
    const stats = [pokemon.stats[0].base_stat * 0.01, pokemon.stats[1].base_stat * 0.01, pokemon.stats[2].base_stat * 0.01, pokemon.stats[5].base_stat * 0.01]

    const distanceBtwnBars = 5
    const xOffset = distanceBtwnBars * (stats.length - 1) / 2
    const yOffset = 4
    const yScale = 1.6

    useFrame(({clock}) => {
        if(props.pokemonHasChanged) {
            clock.start()
            props.setPokemonHasChanged(false)
        }
        const currentTime = clock.getElapsedTime()
        if(lerpTime < currentTime) {
            clock.stop()
        } else {
            // lerp
            stats.forEach((elem, id) => {
                const x = distanceBtwnBars * id - xOffset
                //const y = id === 3 ? 2.55 * yScale : elem * yScale
                const y = elem * yScale
                myMesh.current.children[id].position.lerp(new Vector3(x,y - yOffset,0), currentTime / lerpTime)
                myMesh.current.children[id].scale.lerp(new Vector3(1,y*2,1), currentTime / lerpTime)
            })
        } 
    })

    function printStats() {
        console.log(pokemon.stats)
    }

    function showVerticalBars() {
        //console.log(myMesh.current.children[0])
        return(
            <mesh ref={myMesh}>
                <mesh rotation={[0,Math.PI/4,0]} >
                    <boxGeometry />
                    <meshStandardMaterial color={'lime'} />
                </mesh>

                <mesh rotation={[0,Math.PI/4,0]} >
                    <boxGeometry />
                    <meshStandardMaterial color={'orange'} />
                </mesh>

                <mesh rotation={[0,Math.PI/4,0]} >
                    <boxGeometry />
                    <meshStandardMaterial color={'cyan'} />
                </mesh>

                <mesh rotation={[0,Math.PI/4,0]} >
                    <boxGeometry />
                    <meshStandardMaterial color={'yellow'} />
                </mesh>
            </mesh>
        )     
    }

  return (
    <>
        {
            showVerticalBars()
        }
    </>
  )
}
