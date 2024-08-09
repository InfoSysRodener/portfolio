'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '../helpers/global'
import * as THREE from 'three'

export default function Scene({ ...props }) {
  return (
    <Canvas {...props} dpr={[1, 2]} onCreated={(state) => (state.gl.toneMapping = THREE.ACESFilmicToneMapping)}>
      <r3f.Out />
      <Preload all />
    </Canvas>
  )
}
