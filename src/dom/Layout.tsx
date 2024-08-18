'use client'

import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('@/canvas/Scene'), { ssr: false })
const Scroll = dynamic(() => import('@/dom/Scroll').then((mod) => mod.LocomotiveScroll), { ssr: false })

const Layout = ({ children }: any) => {
  const ref = useRef(null)

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: ' 100%',
        height: '100%',
        overflow: 'hidden',
        touchAction: 'auto',
      }}
    >
      {/* <Scroll>
        </Scroll> */}
      {children}
      <Scene
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
        eventSource={ref}
        eventPrefix="client"
      />
    </div>
  )
}

export { Layout }
