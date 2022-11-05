import { useLoader } from '@react-three/fiber'
import React from 'react'
import { TextureLoader } from 'three'

// Contains just the image of the pokemon in the left/bottom panel (PokemonThree.js)
export default function PokemonCircleImage(props) {   
    const imageLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + props.currentId + '.png'   
    const colorMap = useLoader(TextureLoader, imageLink)  
    
    return (
        <mesh>
            <circleGeometry args={[3, 30]} />
            <meshBasicMaterial side={2} transparent={true} map={colorMap} />       
        </mesh>
    )
}
