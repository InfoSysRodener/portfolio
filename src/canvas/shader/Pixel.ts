import { shaderMaterial } from '@react-three/drei'

import { extend } from '@react-three/fiber'

const vertexShader = /* glsl */ `

    uniform float uTime;
    
    varying vec2 vUv;

    void main()
    {
        vec4 modelPosition = modelMatrix  * vec4(position, 1.0);

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPosition = projectionMatrix * viewPosition;
    
        gl_Position = projectionPosition;
        gl_Position = vec4(position, 1.0);

        vUv = uv;
    }
`
const fragmentShader = /* glsl */ `
    
    uniform sampler2D uTexture;
    uniform float uProgress;
    uniform float uPixels[36];
    uniform vec2 uElementSize;
    uniform vec2 uTextureSize;
    uniform vec2 uMouse;

    varying vec2 vUv;

    void main()
    {
        
        vec2 uv = vUv - vec2(0.5);
        float aspect1 = uTextureSize.x/uTextureSize.y;
        float aspect2 = uElementSize.x/uElementSize.y;
        if(aspect1>aspect2){uv *= vec2( aspect2/aspect1,1.);} 
        else{uv *= vec2( 1.,aspect1/aspect2);}
        uv += vec2(0.5);
        float imageAspect = uTextureSize.x/uTextureSize.y;

        int indexProgress = int(uProgress*36.0);
        float pixellation = floor(uElementSize.x*uPixels[indexProgress]);
        
        vec2 gridSize = vec2(
          pixellation, 
          floor(pixellation/imageAspect)
        );

        vec2 newUV = floor(vUv * gridSize) / gridSize + 0.5 / vec2(gridSize);

        vec4 color = texture2D(uTexture,newUV);
        
        gl_FragColor = color;

        #include <tonemapping_fragment>
        #include <colorspace_fragment>
    }
`

const PixelMaterial = shaderMaterial(
  {
    key: null,
    // uTime: 0,
    uProgress: 0,
    uPixels: null,
    uTexture: null,
    uTextureSize: null,
    uElementSize: null,
  },
  vertexShader,
  fragmentShader,
)

extend({ PixelMaterial })

export default PixelMaterial
