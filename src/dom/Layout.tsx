'use client'

import React, { Suspense, useRef } from 'react'
import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('@/canvas/Scene'), { ssr: false })
// const Scroll = dynamic(() => import('@/dom/Scroll').then((mod) => mod.LocomotiveScroll), { ssr: false })

const Layout = ({ children }: any) => {
  const ref = useRef(null)

  return (
    <Suspense fallback={null}>
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
    </Suspense>
  )
}

export { Layout }
