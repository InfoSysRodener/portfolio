'use client'
import { OrbitControls, OrthographicCamera, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import React, { Suspense, forwardRef, useImperativeHandle, useRef } from 'react'
import { EffectComposer, Noise, ToneMapping } from '@react-three/postprocessing'
import { Three } from '../helpers/Three'
import { ToneMappingMode } from 'postprocessing'

type ViewProps = { children: React.ReactNode; orbit?: boolean } & React.HTMLProps<HTMLDivElement>

export const View = forwardRef<HTMLDivElement, ViewProps>(({ children, orbit, ...props }, ref) => {
  const localRef = useRef<any>(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export const Common = ({ color, cameraType = 'P', position = [0, 0, 1] }: any) => (
  <Suspense fallback={null}>
    {color && <color attach="background" args={[color]} />}
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color="white" decay={0.2} />
    {cameraType === 'O' && <OrthographicCamera makeDefault />}
    {cameraType === 'P' && <PerspectiveCamera makeDefault fov={45} position={position} />}
  </Suspense>
)

export const PostProcessing = () => (
  <Suspense fallback={null}>
    <EffectComposer>
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      <Noise premultiply></Noise>
    </EffectComposer>
  </Suspense>
)
