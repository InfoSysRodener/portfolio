'use client'

import React, { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

const LocomotiveScroll = ({ children }: any) => {
  const ref = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
      containerRef={ref}
    >
      <div data-scroll-container ref={ref}>
        {children}
      </div>
    </LocomotiveScrollProvider>
  )
}

export { LocomotiveScroll }
