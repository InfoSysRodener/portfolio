'use client'

import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loading from './components/Loading'
import { InView } from 'react-intersection-observer'

import { Suspense } from 'react'
import { Physics } from '@react-three/rapier'

const View = dynamic(() => import('@/canvas/View').then((mod) => mod.View), { ssr: false, loading: () => <Loading /> })
// const Grid = dynamic(() => import('@/canvas/shader/Grid'), { ssr: false })
const Cube = dynamic(() => import('@/canvas/Example').then((mod) => mod.Cube), { ssr: false })
const Floor = dynamic(() => import('@/canvas/Example').then((mod) => mod.Floor), { ssr: false })
const Wave = dynamic(() => import('@/canvas/shader/Wave').then((mod) => mod.Wave), { ssr: false })
const Common = dynamic(() => import('@/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Home() {
  return (
    <main data-scroll-section className="relative bg-primary_brown">
      <section className="relative h-screen w-full">
        <section className="fixed top-0 z-50 m-auto w-full bg-primary_brown">
          <Header />
        </section>
        <section className="z-10 w-full pt-40  text-center">
          <h1 className="font-pixel text-3xl font-semibold text-primary_blue sm:text-5xl">Hi, This is Rodener</h1>
          <p className="mt-3 pb-2 font-outfit text-2xl text-secondary_red">Web Developer</p>
        </section>
        <View className="relative m-auto h-64 w-full max-w-3xl py-20">
          <Suspense fallback={null}>
            <Common position={[0, 10, 40]} />
            <Physics>
              <Cube />
              <Floor />
            </Physics>
          </Suspense>
        </View>
      </section>
      <section className="relative m-auto my-10 h-auto w-full max-w-2xl">
        <section className="relative z-10  block px-5 sm:mt-10 sm:px-10">
          <h2 className="font-pixel text-3xl font-semibold  text-primary_blue sm:text-3xl">Projects</h2>
        </section>
        <div className="grid grid-cols-2 px-14">
          <InView as="article">
            {({ inView, ref }) => (
              <div className="relative m-auto my-10 size-64">
                <div ref={ref} className=" rounded-xl bg-primary_red">
                  <View className="relative z-10 m-auto flex h-40 w-64 items-center justify-center rounded-xl">
                    <Suspense fallback={null}>
                      <Common />
                      <Wave inView={inView} imagePath="./project-seed/home.PNG" />
                    </Suspense>
                  </View>
                </div>
                <h3 className="p-2 text-center font-outfit">Project Seed</h3>
                <p className="p-2 text-center font-outfit text-sm">An all-in-one blockchain gaming ecosystem that promotes mass adoption.</p>
              </div>
            )}
          </InView>
          <InView as="article">
            {({ inView, ref }) => (
              <div className="relative m-auto my-10 size-64">
                <div ref={ref} className=" rounded-xl bg-primary_red ">
                  <View className="relative z-10 m-auto flex h-40 w-64 items-center justify-center rounded-xl">
                    <Suspense fallback={null}>
                      <Common />
                      <Wave inView={inView} imagePath="./selaras/selaras.jpg" />
                    </Suspense>
                  </View>
                </div>
                <h3 className="p-2 text-center font-outfit">Project Seed</h3>
              </div>
            )}
          </InView>
          <InView as="article">
            {({ inView, ref }) => (
              <div className="relative m-auto my-10 size-64">
                <div ref={ref} className=" rounded-xl bg-primary_red  ">
                  <View className="relative z-10 m-auto flex h-40 w-64 items-center justify-center rounded-xl">
                    <Suspense fallback={null}>
                      <Common />
                      <Wave inView={inView} imagePath="./project-seed/home.PNG" />
                    </Suspense>
                  </View>
                </div>
                <h3 className="p-2 text-center font-outfit">Project Seed</h3>
              </div>
            )}
          </InView>
        </div>
      </section>
      <Footer />
    </main>
  )
}
