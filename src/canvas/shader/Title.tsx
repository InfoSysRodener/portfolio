import { useDomToCanvas } from '@/app/hook/useDomToCanvas'
import { Html } from '@react-three/drei'
import React, { useMemo, useState } from 'react'

const vertexShader = /* glsl */ `

    varying vec2 vUv;

    void main()
    {
        gl_Position = projectionMatrix * viewMatrix *  modelMatrix  * vec4(position, 1.0);

        vUv = uv;
    }
`

const fragmentShader = /* glsl */ `
    
    uniform sampler2D uTexture;
    varying vec2 vUv;

    void main()
    {
        vec4 texture = texture2D(uTexture,vUv);
        vec3 mixedColor  = mix(texture.rgb, vec3(0.,1.,1.), 0.5);

        gl_FragColor = vec4(mixedColor,texture.a);

        #include <tonemapping_fragment>
        #include <colorspace_fragment>
    }
`

const Title = () => {
  const [domEl, setDomEl] = useState<any>(null)

  const textureDOM = useDomToCanvas(domEl)

  const uniforms = useMemo(
    () => ({
      uTexture: { value: textureDOM },
    }),
    [textureDOM],
  )

  return (
    <>
      <Html zIndexRange={[-1, -10]} prepend className="z-10 mt-10 w-full px-5 text-center sm:mt-20 sm:px-10">
        <div ref={(el) => setDomEl(el)}>
          <h1 className="font-pixel text-4xl font-semibold text-primary_blue sm:text-7xl">Hi, This is Rodener</h1>
          <p className="mt-3 pb-2 font-outfit text-2xl text-secondary_red">Web Developer</p>
        </div>
      </Html>
      <mesh>
        <planeGeometry args={[1, 1, 16, 16]} />
        <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} />
      </mesh>
    </>
  )
}

export default Title
