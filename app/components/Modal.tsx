/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { FaX, FaSquareUpRight } from 'react-icons/fa6'
import Image from 'next/image'
import { useStore } from '../store'
import { animated, useSpring, useSpringRef } from '@react-spring/web'
import { useState, useEffect, Suspense } from 'react'
import { fetcher } from '../utils'
import Loading from './Loading'
import useSWR from 'swr'

const Modal = () => {
  const api = useSpringRef()
  const { showModal, setModal, experience } = useStore((state) => ({
    showModal: state.showModal,
    setModal: state.setModal,
    experience: state.experience,
  }))
  const [visible, setVisible] = useState<boolean>(false)
  const [showMore, setShowMore] = useState<boolean>(false)

  const springs = useSpring({
    ref: api,
    from: { y: 200, opacity: 0 },
  })

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
      api.start({
        to: {
          y: 0,
          opacity: 1,
        },
      })
    } else {
      document.body.style.overflow = 'auto'
      api.start({
        to: {
          y: 200,
          opacity: 0,
        },
      })
    }
  }, [showModal, api])

  useEffect(() => {
    if (!showModal)
      setTimeout(() => {
        setVisible(true)
      }, 300)
    else {
      setVisible(false)
    }
  }, [showModal])

  useEffect(() => {
    setShowMore(experience.responsibility?.length > 3)
  }, [experience])

  const display = visible ? 'none' : ''

  const { data } = useSWR('/api/skills', fetcher)
  if (!data) return <Loading />

  const filteredData = data.filter((item: any) => experience.stack.some((keyword: any) => item.name.toLowerCase().includes(keyword)))

  return (
    <>
      <animated.div style={{ ...springs, display: display }} className="fixed inset-0 z-[99999] flex size-full items-center justify-center px-5">
        <div className=" relative h-auto w-[576px]  max-w-xl bg-white">
          <header className="relative">
            <FaX
              className="absolute right-5 top-5 z-10 size-5 cursor-pointer rounded-full bg-primary_blue p-1 text-primary_brown transition duration-300 ease-in-out hover:bg-secondary_red"
              onClick={setModal}
            />
            <Suspense fallback={<div className="flex h-[144px] w-[576px] items-center justify-center">Loading....</div>}>
              <Image
                src={experience.img}
                width={576}
                height={100}
                alt={experience.alt_text}
                className="aspect-auto size-auto h-32 w-full object-cover sm:h-36"
              />
            </Suspense>
          </header>
          <section className="grid grid-cols-2 p-5">
            <div>
              <h2 className=" text-sm font-semibold">Role</h2>
              <p className="font-outfit text-xs capitalize">{experience.role}</p>
            </div>
            <div>
              <h2 className=" text-sm font-semibold">Tech Stack</h2>
              <ul className="w-full">
                {filteredData.map((item: any, index: number) => (
                  <li className="mx-1 inline-flex items-center gap-1" key={index}>
                    <Image src={item.src} width={16} height={16} alt="skill icon" />
                    <p className="font-outfit text-xs">{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className=" px-5 ">
            <div>
              <h3 className="text-sm font-semibold capitalize">{experience.name}</h3>
              <p className="text-xs ">{experience.description}</p>
            </div>
          </section>
          <section className="mb-10 p-5">
            <div className="mb-5">
              <h2 className=" text-sm font-semibold">Responsibilities</h2>
              <ul className={`${showMore ? 'h-12' : 'h-auto'} overflow-hidden`}>
                {experience.responsibility.map((item: any, index: number) => (
                  <li className="text-xs" key={index}>
                    <p> - {item}</p>
                  </li>
                ))}
              </ul>
              {showMore && (
                <p className="mt-1 inline-flex cursor-pointer border p-1 text-xs text-primary_red" onClick={() => setShowMore(false)}>
                  Show more...
                </p>
              )}
            </div>
          </section>
          <section></section>
          <footer className="absolute bottom-0 left-0 w-52">
            <div className="m-5 cursor-pointer  border-2 border-primary_blue p-1 text-center font-pixel text-primary_blue hover:border-secondary_red hover:bg-primary_red hover:text-primary_brown">
              <a href={experience.website_link} target="_blank" className=" flex items-center justify-center gap-2 text-xs ">
                View Website <FaSquareUpRight />
              </a>
            </div>
          </footer>
        </div>
      </animated.div>
      <animated.div style={{ display: display }} className="fixed inset-0 z-[9999] bg-black opacity-50" />
    </>
  )
}

export default Modal
