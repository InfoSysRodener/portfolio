import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const TEXTURE_PATH = 'https://res.cloudinary.com/dg5nsedzw/image/upload/v1641657168/blog/vaporwave-threejs-textures/grid.png'
const DISPLACEMENT_PATH = 'https://res.cloudinary.com/dg5nsedzw/image/upload/v1641657200/blog/vaporwave-threejs-textures/displacement.png'

const planeLength = 3
const planeGeometry = new THREE.PlaneGeometry(1, planeLength, 24, 24)
const planeMaterial = new THREE.MeshStandardMaterial({ displacementScale: 0.4 })

const Grid = () => {
  const plane1 = useRef<THREE.Mesh>(null)
  const plane2 = useRef<THREE.Mesh>(null)

  const { map, displacementMap } = useTexture({ map: TEXTURE_PATH, displacementMap: DISPLACEMENT_PATH })

  planeMaterial.map = map
  planeMaterial.displacementMap = displacementMap

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime() * 0.1
    if (plane1.current) plane1.current.position.z = elapsedTime % planeLength
    if (plane2.current) plane2.current.position.z = (elapsedTime % planeLength) - planeLength
  })

  return (
    <group position={[0, -0.1, 0]}>
      <mesh ref={plane1} geometry={planeGeometry} material={planeMaterial} rotation={[-Math.PI * 0.5, 0, 0]} />
      <mesh ref={plane2} position={[0, 0, -planeLength]} rotation={[-Math.PI * 0.5, 0, 0]} geometry={planeGeometry} material={planeMaterial} />
    </group>
  )
}

export default Grid
