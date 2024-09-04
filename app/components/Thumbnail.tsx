import Image from 'next/image'
import { InView } from 'react-intersection-observer'
import { useSpring, animated } from '@react-spring/web'

type thumbailProps = {
  onClick: () => void
  index: number
  imgPath: string
  altText: string
  title: string
}

const Thumbnail = ({ imgPath, index, altText, title, onClick }: thumbailProps) => {
  const [props, api] = useSpring(() => ({
    opacity: 0,
    y: 35,
    delay: 100 * index,
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.1)',
  }))

  const handleMouseEnter = () => {
    api.start({
      scale: 1.01,
      config: { tension: 180, friction: 12 },
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
    })
  }

  const handleMouseLeave = () => {
    api.start({
      scale: 1,
      config: { tension: 180, friction: 12 },
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.1)',
    })
  }

  const { y, opacity, scale, boxShadow } = props

  return (
    <InView as="article">
      {({ inView, ref }) => {
        if (inView) {
          api.start({ opacity: 1, y: 0, delay: 100 * index })
        }
        return (
          <animated.div
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative m-auto my-5 h-44 w-64 cursor-pointer `}
            style={{ y, opacity }}
          >
            <animated.div ref={ref} style={{ transform: scale.to((s) => `scale(${s})`), boxShadow: boxShadow }} className={`relative rounded-xl`}>
              <Image className="aspect-auto size-auto rounded-md object-cover" src={imgPath} width={256} height={142} alt={altText} priority />
            </animated.div>
            <h3 className="p-2 text-center font-outfit capitalize text-primary_blue">{title}</h3>
          </animated.div>
        )
      }}
    </InView>
  )
}

export default Thumbnail
