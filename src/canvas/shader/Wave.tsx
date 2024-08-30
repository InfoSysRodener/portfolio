import React, { useEffect, useState } from 'react'

import * as THREE from 'three'
import gsap from 'gsap'
import { useFrame, useLoader } from '@react-three/fiber'
import { useGSAP } from '@gsap/react'
import PixelMaterial from './Pixel'

const Wave = ({ inView, imagePath }: { inView: boolean; imagePath: string }) => {
  const [refMesh, setRefMesh] = useState<any>(null)
  const [texture, setTexture] = useState<THREE.Texture>()
  const [textureSize, setTextureSize] = useState([0, 0])
  const [elementSize, setElementSize] = useState([0, 0])

  const colorMap = useLoader(THREE.TextureLoader, imagePath)

  const PIXELS = [
    1, 1.5, 2, 2.5, 3, 1, 1.5, 2, 2.5, 3, 3.5, 4, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 20, 50,
  ].map((v) => v / 50)

  const uniforms = {
    uTime: new THREE.Uniform(0),
    uElementSize: new THREE.Uniform(new THREE.Vector2()),
    uTextureSize: new THREE.Uniform(new THREE.Vector2(textureSize[0], textureSize[1])),
    uTexture: new THREE.Uniform(colorMap),
    uPixels: new THREE.Uniform(PIXELS),
    uProgress: new THREE.Uniform(0.9),
    uMouse: new THREE.Uniform(new THREE.Vector2()),
  }

  useEffect(() => {
    if (refMesh) {
      refMesh.material.uProgress = 0
    }
  }, [])

  useEffect(() => {
    if (colorMap) {
      setTexture(colorMap)
      setTextureSize([colorMap.source.data.width, colorMap.source.data.height])
      colorMap.colorSpace = THREE.SRGBColorSpace
    }
  }, [])

  useGSAP(() => {
    if (refMesh?.material) {
      gsap.to(refMesh.material, {
        uProgress: inView ? 1 : 0,
        duration: 1.5,
        ease: 'none',
      })
    }
  }, [inView])

  useFrame((state) => {
    const clock = state.clock.getElapsedTime()
    uniforms.uTime.value = clock
    uniforms.uElementSize.value.set(state.size.width, state.size.height)
    setElementSize([state.size.width, state.size.height])
    uniforms.uMouse.value.set(state.pointer.x, state.pointer.y)
  })

  return (
    <mesh ref={setRefMesh}>
      <planeGeometry args={[1, 1]} />
      {/* <pixelMaterial
        key={PixelMaterial.key}
        uMouse={uniforms.uMouse}
        uTexture={texture}
        uPixels={PIXELS}
        uElementSize={new THREE.Vector2(elementSize[0], elementSize[1])}
        uTextureSize={new THREE.Vector2(textureSize[0], textureSize[1])}
      /> */}
    </mesh>
  )
}

export { Wave }
