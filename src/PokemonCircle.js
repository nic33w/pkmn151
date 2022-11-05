import { useFrame } from '@react-three/fiber'
import React, { Suspense, useRef, useState } from 'react'
import PokemonCircleImage from './PokemonCircleImage'

// Displays the 3D yellow ring & image of pokemon in the left/bottom panel (PokemonThree.js)
// Handles the spinning animation
export default function PokemonCircle(props) {
    const myMesh = useRef()
    const [hover, setHover] = useState(false)
    const spinSpeed = 0.04

    useFrame(() => {
      if(hover) {
        myMesh.current.rotation.y = (myMesh.current.rotation.y += spinSpeed)
      } else {
        myMesh.current.rotation.y = 0
      }
    })

  return (
    <mesh ref={myMesh} onPointerOver={(e) => setHover(true)} onPointerOut={(e)=> setHover(false)}>
      <torusGeometry args={[3, 0.1, 4, 50]} />
      <meshStandardMaterial color={hover ? 'yellow' : 'gold'} />
      <Suspense fallback={<mesh></mesh>} >
        <PokemonCircleImage currentId={props.currentId} />
      </Suspense>
    </mesh>
  )
}
