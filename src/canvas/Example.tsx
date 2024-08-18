'use client'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { InstancedRigidBodies, InstancedRigidBodyProps, RapierRigidBody, RigidBody } from '@react-three/rapier'

import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import usePostProcess from '../templates/hooks/useProcess'

export function Dog(props: any) {
  const { scene } = useGLTF('/dog.glb')

  usePostProcess()

  return <primitive object={scene} {...props} position={[0, -1, 0]} />
}

export function Cube() {
  const rigidBodies = useRef<RapierRigidBody[]>(null)
  const cubesCount = 300
  const { raycaster } = useThree()

  const handleClick = (event: { object: THREE.Object3D<THREE.Object3DEventMap> }) => {
    const intersect = raycaster.intersectObject(event.object)

    if (intersect.length > 0) {
      const index = intersect[0].instanceId

      if (index !== undefined && rigidBodies.current) {
        const body = rigidBodies.current[index]
        if (body) {
          body.applyImpulse({ x: 0, y: Math.random() * 100, z: 0 }, true)
          body.applyTorqueImpulse({ x: 0, y: Math.random() * 100, z: 0 }, true)
        }
      }
    }
  }
  const instancedMeshRef = useRef<THREE.InstancedMesh>(null)

  useEffect(() => {
    if (!rigidBodies.current) {
      return
    }
    rigidBodies.current.forEach((api, i) => {
      api.applyImpulse({ x: 0, y: 0, z: 0 }, false)

      if (instancedMeshRef.current) {
        instancedMeshRef.current.setColorAt(i, new THREE.Color(`hsl(${(i / cubesCount) * (Math.random() * 360)}, 100%, 50%)`))
        instancedMeshRef.current.instanceMatrix.needsUpdate = true
      }
    })
  }, [])

  const instances = useMemo<any>(() => {
    const instances: InstancedRigidBodyProps[] = []
    const size = Math.sqrt(cubesCount)
    const halfSize = size / 2
    const spacing = 1 + 5

    for (let i = 0; i < cubesCount; i++) {
      const x = (i % size) * spacing - halfSize * spacing // Calculate x position
      const z = Math.floor(i / size) * spacing - halfSize * spacing // Calculate z position

      instances.push({
        key: 'instance_' + i,
        position: [x, 0, z],
        // rotation: [Math.random(), Math.random(), Math.random()],
        scale: [Math.random(), Math.random(), Math.random()],
      })
    }

    return instances
  }, [])

  return (
    <InstancedRigidBodies ref={rigidBodies} instances={instances}>
      <instancedMesh ref={instancedMeshRef} onClick={handleClick} castShadow args={[undefined, undefined, cubesCount]}>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial />
      </instancedMesh>
    </InstancedRigidBodies>
  )
}

export function Floor() {
  return (
    <RigidBody type="fixed" restitution={0} friction={0.7}>
      <mesh position={[0, -1, 0]} rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100, 1]} />
        <meshBasicMaterial opacity={0} color="#FDF0D5" />
      </mesh>
    </RigidBody>
  )
}
