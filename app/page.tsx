'use client'

import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loading from './components/Loading'

// import { Suspense } from 'react'
// import { Physics } from '@react-three/rapier'
const Thumbnail = dynamic(() => import('@/components/Thumbnail'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false })
import useSWR from 'swr'
import { fetcher } from './utils'
import { Physics } from '@react-three/rapier'
import { Suspense } from 'react'

// import { Html, useProgress } from '@react-three/drei'

// const Grid = dynamic(() => import('@/canvas/shader/Grid'), { ssr: false })
// const Wave = dynamic(() => import('@/canvas/shader/Wave').then((mod) => mod.Wave), { ssr: false })
const View = dynamic(() => import('@/canvas/View').then((mod) => mod.View), { ssr: false })
const Cube = dynamic(() => import('@/canvas/Example').then((mod) => mod.Cube), { ssr: false })
const Floor = dynamic(() => import('@/canvas/Example').then((mod) => mod.Floor), { ssr: false })
const Common = dynamic(() => import('@/canvas/View').then((mod) => mod.Common), { ssr: false })

// function Loader() {
//   const { progress } = useProgress()
//   console.log('progress', progress)
//   return <Html center>{progress} % loaded</Html>
// }

const Project = () => {
  const { data } = useSWR('/api/work', fetcher)
  if (!data) return <Loading />
  return (
    <div className="grid grid-cols-1 px-14 sm:grid-cols-2">
      {data.map((item: any, index: number) => (
        <Thumbnail key={index} index={index} title={item.name} altText={item.alt_text} imgPath={item.img} />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main data-scroll-section className="relative bg-primary_brown">
      <section className="relative m-auto h-auto w-full max-w-3xl">
        <section className="fixed top-0 z-50 w-full max-w-3xl bg-primary_brown">
          <Header />
        </section>
        <View className="relative m-auto h-64 w-full max-w-3xl pt-40">
          <Suspense fallback={''}>
            <Common position={[0, 5, 20]} />
            <Physics>
              <Cube />
              <Floor />
            </Physics>
          </Suspense>
        </View>
        <section className="z-10 w-full pt-20  text-center">
          <h1 className="font-pixel text-3xl font-semibold text-primary_blue sm:text-5xl">Hi, This is Rodener</h1>
          <p className="mt-3 pb-2 font-outfit text-xl text-secondary_red">Fullstack/Creative Web Developer</p>
        </section>
        <section className=" flex items-center justify-center gap-2">
          <div className="inline-flex gap-1 overflow-hidden rounded-md bg-gray-800 text-primary_brown">
            <p className="py-1 pl-2 text-xs lowercase leading-3">Available to</p>
            <p className="bg-green-600 px-2 py-1 text-xs lowercase leading-3">Work</p>
          </div>
          <div className="inline-flex gap-1 overflow-hidden rounded-md bg-gray-800 text-primary_brown">
            <p className="py-1 pl-2 text-xs lowercase leading-3">love</p>
            <p className="bg-blue-600 px-2 py-1 text-xs lowercase leading-3">Motorcycle</p>
          </div>
          <div className="inline-flex gap-1 overflow-hidden rounded-md bg-gray-800 text-primary_brown">
            <p className="py-1 pl-2 text-xs lowercase leading-3">love</p>
            <p className="bg-violet-600 px-2 py-1 text-xs lowercase leading-3">Music</p>
          </div>
        </section>
        <p className="m-auto max-w-xl p-10 text-center font-outfit font-semibold text-primary_blue">
          I blend artwork with cutting edge technology, I specialize in frontend development, transforming design into functional, high performing web
          application.
        </p>
      </section>
      <section className="relative m-auto my-10 h-auto w-full max-w-2xl">
        <section className="relative z-10  block px-5 sm:mt-10 sm:px-10">
          <h2 className="font-pixel text-3xl font-semibold  text-primary_blue sm:text-3xl">Skills</h2>
        </section>
        <section className="relative m-auto mt-5 max-w-2xl px-5 sm:px-14">
          <Skills />
        </section>
      </section>
      <section className="relative m-auto my-10 h-auto w-full max-w-2xl">
        <section className="relative z-10  block px-5 pb-5 sm:mt-10 sm:px-10">
          <h2 className="font-pixel text-3xl font-semibold  text-primary_blue sm:text-3xl">Experience</h2>
        </section>
        <section>
          <Project />
        </section>
      </section>
      <Footer />
    </main>
  )
}
