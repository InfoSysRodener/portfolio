const data = [
  {
    name: 'Html',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg',
    alt_text: 'Icon image of Html',
  },
  {
    name: 'CSS',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg',
    alt_text: 'Icon image of CSS Cascading Style Sheets',
  },
  {
    name: 'Javascript',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg',
    alt_text: 'Icon image of Javascript',
  },
  {
    name: 'Typescript',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TypeScript.svg',
    alt_text: 'Icon image of TypeScript',
  },
  {
    name: 'Git',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg',
    alt_text: 'Icon image of Git',
  },
  {
    name: 'Amazon Web Services',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/AWS-Light.svg',
    alt_text: 'Icon image of AWS Amazon Web Services',
  },
  {
    name: 'ThreeJS',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/ThreeJS-Light.svg',
    alt_text: 'Icon image of ThreeJS WebGL',
  },
  {
    name: 'ReactJS',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Light.svg',
    alt_text: 'Icon image of React JS',
  },
  {
    name: 'NextJS',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NextJS-Light.svg',
    alt_text: 'Icon image of Next JS',
  },
  {
    name: 'TailwindCSS',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Light.svg',
    alt_text: 'Icon image of TailwindCSS',
  },
  {
    name: 'VueJS',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/VueJS-Light.svg',
    alt_text: 'Icon image of VueJS',
  },
  {
    name: 'Vite',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Vite-Light.svg',
    alt_text: 'Icon image of Vite',
  },

  {
    name: 'Firebase',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Firebase-Light.svg',
    alt_text: 'Icon image of Firebase',
  },
  {
    name: 'Laravel',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Laravel-Light.svg',
    alt_text: 'Icon image of Laravel',
  },
  {
    name: 'Postman',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Postman.svg',
    alt_text: 'Icon image of Postman',
  },
  {
    name: 'Blender',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Blender-Light.svg',
    alt_text: 'Icon image of Blender Software',
  },
  {
    name: 'NodeJS',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Light.svg',
    alt_text: 'Icon image of NodeJs',
  },
  {
    name: 'NuxtJS',
    src: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NuxtJS-Light.svg',
    alt_text: 'Icon image of NodeJs',
  },
]

export async function GET() {
  return Response.json(data)
}
