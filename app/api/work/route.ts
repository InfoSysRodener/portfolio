const data = [
  {
    img: '/arundaya/thumbnail.png',
    name: 'arundaya',
    alt_text: 'Thumbnail Picture of Project arundaya',
  },
  {
    img: '/staking-project-seed/thumbnail.png',
    name: 'staking project seed',
    alt_text: 'Thumbnail Picture of Project arundaya',
  },
  {
    img: '/outlandodyssey/thumbnail.png',
    name: 'outland odyssey',
    alt_text: 'Thumbnail Picture of Project outland odyssey',
  },
  {
    img: '/project-seed/thumbnail.png',
    name: 'project seed',
    alt_text: 'Thumbnail Picture of Project project seed',
  },
  {
    img: '/selaras/thumbnail.png',
    name: 'selaras arts space',
    alt_text: 'Thumbnail Picture of Project selaras arts space',
  },
]

export async function GET() {
  return Response.json(data)
}
