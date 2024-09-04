/* eslint-disable tailwindcss/no-custom-classname */

import Image from 'next/image'
import useSWR from 'swr'
import { fetcher } from '../utils'
import Loading from './Loading'
import Draggable from 'react-draggable'
import { useState } from 'react'

const SkillCard = (props: any) => (
  <div className="relative my-1 inline-flex h-9 cursor-grab items-center gap-2 rounded-lg bg-primary_red px-1 py-3 pr-2 text-primary_brown ">
    <Image className="select-none" src={props.src} width={25} height={25} alt={props.alt_text} />
    <span className=" text-sm font-semibold ">{props.name}</span>
  </div>
)

const DraggableSkillCard = ({ src, alt_text, name }: any) => {
  const [zIndex, setZIndex] = useState<any>(1)

  const onStart = () => {
    const hIndexStr = localStorage.getItem('hIndex')
    const hIndex: number = hIndexStr !== null ? parseInt(hIndexStr, 10) : 0
    setZIndex(hIndex + 1)
  }

  const onStop = () => {
    localStorage.setItem('hIndex', zIndex)
  }

  return (
    <Draggable onStart={onStart} onStop={onStop}>
      <div className="relative" style={{ zIndex }}>
        <SkillCard src={src} alt_text={alt_text} name={name} />
      </div>
    </Draggable>
  )
}

const Skills = () => {
  const { data } = useSWR('/api/skills', fetcher)
  if (!data) return <Loading />

  return (
    <div className="gridLine relative flex h-64 flex-wrap gap-2 sm:p-5">
      {data.map((item: any, index: any) => (
        <DraggableSkillCard key={index} src={item.src} alt_text={item.alt_text} name={item.name} />
      ))}
    </div>
  )
}

export default Skills
