'use client'

import Link from 'next/link'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Float } from '@react-three/drei'

const Cube = dynamic(() => import('@/canvas/Example').then((mod) => mod.Cube), { ssr: false })
const Floor = dynamic(() => import('@/canvas/Example').then((mod) => mod.Floor), { ssr: false })

const View = dynamic(() => import('@/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <svg className="-ml-1 mr-3 size-5 animate-spin text-black" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Home() {
  return (
    <main className="relative bg-[#FDF0D5]">
      <section className="relative h-screen w-full">
        <View className="absolute flex size-full flex-col justify-center">
          <Suspense fallback={null}>
            <Common color="#FDF0D5" />
            <Float speed={0.2} rotationIntensity={0.4}>
              <Cube />
            </Float>
            <Floor />
          </Suspense>
        </View>
        <section className="relative z-10 m-auto w-full border border-b-2 border-b-[#C1121F] p-5 text-[#003049] sm:px-10 sm:py-5">
          <header className="flex items-center justify-between px-3">
            <h2 className="cursor-pointer py-1 text-xl font-bold leading-5 tracking-widest ">
              <span className="font-tagalog">ᜍ᜔ᜇᜒᜈᜒᜍ᜔</span>
            </h2>
            <h2 className=" text-2xl  font-bold">
              <Link href="/resume" className="p-1 font-pixel text-base leading-3">
                Resume
              </Link>
            </h2>
          </header>
        </section>
        <section className="relative z-10 mt-10 px-5 sm:mt-20 sm:px-10">
          <h1 className="font-pixel text-4xl font-semibold text-[#003049] sm:text-7xl">Hi, This is Rodener</h1>
          <p className="mt-3 pb-2 font-outfit text-2xl text-[#C1121F]">Web Developer</p>
          <p className="w-full py-2 font-outfit text-lg text-[#669bbc] sm:w-1/2">
            With four years of experience, I specialize in creating dynamic and responsive mobile applications, transforming detailed mockups into fully functional solutions, and utilizing 3D implementation and graphic shaders to enhance user
            experiences.
          </p>
        </section>
      </section>
      <section className="relative h-screen w-full">
        <View className="absolute flex size-full flex-col justify-center">
          <Suspense fallback={null}></Suspense>
        </View>
        <section className="relative z-10 mt-10 px-5 sm:mt-20 sm:px-10">
          <h2 className="font-pixel text-4xl font-semibold sm:text-7xl">Experience</h2>
        </section>
      </section>
    </main>
  )
}
