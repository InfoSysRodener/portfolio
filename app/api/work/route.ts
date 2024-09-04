const data = [
  {
    img: '/arundaya/thumbnail.png',
    name: 'arundaya',
    alt_text: 'Image Picture of Project arundaya',
    website_link: 'https://www.arundaya.app',
    role: 'full stack dev',
    stack: ['nextjs', 'firebase', 'tailwindcss', 'typescript'],
    description:
      'An innovative mobile web app designed to enhance gallery experience. This app transforms the gallery visit into an immersive and interactive adventure, blending art with engaging gameplay',
    responsibility: [
      'Convert Figma designs into interactive and functional UI components.',
      'Simplify sign-in/up experience. with social media.',
      'Quiz Game',
      'Treasure Hunt Game State',
      'Sack Race Game Control',
      'Avatar Creation',
      'Real Time Interaction',
    ],
  },
  {
    img: '/staking-project-seed/thumbnail.png',
    name: 'staking project seed',
    alt_text: 'Image Picture of Project arundaya',
    website_link: 'https://staking.projectseed.com',
    role: 'front end dev',
    stack: ['nextjs', 'tailwindcss'],
    description:
      'A website where users can participate in blockchain staking. Staking involves locking up cryptocurrency to support the operations of a blockchain network, and in return, users earn rewards.',
    responsibility: [
      'Convert Figma designs into functional UI components.',
      'Collaborated with the blockchain team on front-end design and implementation',
    ],
  },
  {
    img: '/outlandodyssey/thumbnail.png',
    name: 'outland odyssey',
    alt_text: 'Image Picture of Project outland odyssey',
    website_link: 'https://outlandodyssey.com/',
    role: 'front end dev',
    stack: ['nextjs', 'tailwindcss', 'threejs', 'tailwindcss'],
    description:
      'A game developed by Project Seed, This website offers a comprehensive look into the game. It features updates and news, details the game’s story, characters, Zeds, weapons, and armor. Explore gameplay mechanics, discover unique features, and visit the NFT marketplace. Learn about in-game tokens.',
    responsibility: [
      'Convert Figma designs into interactive and functional UI components.',
      'Ensure the website is responsive across various screen sizes and browser dimensions.',
      'Optimize images and ensure the website is SEO-friendly with accessibility considerations.',
      'Compatible across all browsers.',
    ],
  },
  {
    img: '/project-seed/thumbnail.png',
    name: 'project seed',
    alt_text: 'Image Picture of Project project seed',
    website_link: 'https://projectseed.com',
    role: 'full stack dev',
    stack: ['reactjs', 'nodejs', 'threejs', 'tailwindcss'],
    description: 'An all-in-one blockchain gaming ecosystem that promotes mass adoption.',
    responsibility: [
      'Convert Figma designs into functional components.',
      'Implement a stunning 3D model, created by my colleague, on the homepage',
      'Ensure the website is responsive across various screen sizes and browser dimensions.',
      'Optimize images and ensure the website is SEO-friendly with accessibility considerations.',
      'Compatible across all browsers.',
    ],
  },
  {
    img: '/selaras/thumbnail.png',
    name: 'selaras arts space',
    alt_text: 'Image Picture of Project selaras arts space',
    website_link: 'https://selarasartspace.netlify.app/',
    role: 'full stack dev',
    stack: ['nuxtjs', 'threejs', 'amazon web services'],
    description: 'A museum experience to showcase the artist&apos;s work, with the option to purchase art while exploring the gallery.',
    responsibility: [
      'Convert Figma designs into functional components.',
      'Simplify login by utilizing AWS Cognito for user authentication and AWS Amplify for hosting the site and managing the user database.',
      'Integrate the Three.js components built by my fellow developer into the Nuxt.js framework to create a web application.',
    ],
  },
]

export async function GET() {
  return Response.json(data)
}
