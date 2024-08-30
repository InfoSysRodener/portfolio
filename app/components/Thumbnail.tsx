import Image from 'next/image'
import { InView } from 'react-intersection-observer'
import { useSpring, animated } from '@react-spring/web'

type thumbailProps = {
  index: number
  imgPath: string
  altText: string
  title: string
}

const Thumbnail = ({ imgPath, index, altText, title }: thumbailProps) => {
  const [props, api] = useSpring(() => ({
    opacity: 0,
    y: 35,
    delay: 100 * index,
  }))

  return (
    <InView as="article">
      {({ inView, ref }) => {
        if (inView) {
          api.start({ opacity: 1, y: 0, delay: 200 * index })
        } else {
          api.start({ opacity: 0, y: 35 })
        }
        return (
          <animated.div className={`relative m-auto my-5 h-44 w-64 cursor-pointer `} style={props}>
            <div ref={ref} className={`rounded-xl bg-primary_red `}>
              <Image className="aspect-auto size-auto rounded-md" src={imgPath} width={256} height={142} alt={altText} priority />
            </div>
            <h3 className="p-2 text-center font-outfit capitalize text-primary_blue">{title}</h3>
          </animated.div>
        )
      }}
    </InView>
  )
}

export default Thumbnail
