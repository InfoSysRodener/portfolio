import { create } from 'zustand'

type modalType = {
  showModal: boolean
  setModal: () => void
  experience: any
  // eslint-disable-next-line no-unused-vars
  setExperience: (data: any) => void
}

export const useStore = create<modalType>((set) => ({
  showModal: false,
  setModal: () => set((state: { showModal: boolean }) => ({ showModal: !state.showModal })),
  experience: {
    img: '/arundaya/thumbnail.png',
    name: 'arundaya',
    alt_text: 'Thumbnail Picture of Project arundaya',
    website_link: 'https://www.arundaya.app',
    role: 'full stack dev',
    stack: ['nextjs', 'firebase', 'tailwindcss'],
    description: '',
    responsibility: [
      'Convert Figma designs into functional components.',
      'Simplify sign-in and sign-up exp. w/ social media.',
      'Quiz Game',
      'Treasure Hunt Game State',
      'Sack Race Game Control',
      'Avatar Creation',
      'Real Time Interation',
    ],
  },
  setExperience: (data: any) => set(() => ({ experience: data })),
}))
