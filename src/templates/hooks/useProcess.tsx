//@ts-nocheck
import { useFrame, useThree } from '@react-three/fiber'
import { useMemo } from 'react'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js'

// Basic shader postprocess based on the template https://gist.github.com/RenaudRohlinger/bd5d15316a04d04380e93f10401c40e7
// USAGE: Simply call usePostprocess hook in your r3f component to apply the shader to the canvas as a postprocess effect
export const usePostProcess = () => {
  const { scene, camera, gl, size } = useThree()
  const composer = useMemo(() => {
    const composer = new EffectComposer(gl)
    composer.setSize(size.width, size.height)

    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    // const dotScreenPass = new ShaderPass(DotScreenShader)
    // dotScreenPass.uniforms['scale'].value = 3
    // composer.addPass(dotScreenPass)

    const rgbShiftPass = new ShaderPass(RGBShiftShader)
    rgbShiftPass.uniforms['amount'].value = 0.005
    composer.addPass(rgbShiftPass)

    return composer
  }, [scene, camera, gl, size])

  useFrame((_, delta) => {
    composer.render(delta)
  }, 2)

  return null
}

export default usePostProcess
