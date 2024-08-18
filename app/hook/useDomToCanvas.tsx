import * as THREE from 'three'
import html2canvas from 'html2canvas'
import { useState, useEffect } from 'react'
import { debounce } from 'lodash'

const useDomToCanvas = (domEl: HTMLElement) => {
  const [texture, setTexture] = useState<THREE.CanvasTexture>()

  useEffect(() => {
    if (!domEl) return

    const convertDomToCanvas = async () => {
      const canvas = await html2canvas(domEl, { backgroundColor: null })
      setTexture(new THREE.CanvasTexture(canvas))
    }
    convertDomToCanvas()

    const debouncedResize = debounce(() => {
      convertDomToCanvas()
    }, 100)

    window.addEventListener('resize', debouncedResize)
  }, [domEl])

  return texture
}

export { useDomToCanvas }
