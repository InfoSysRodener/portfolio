import { Metadata } from 'next'
import Resume from './resume'

export const metadata: Metadata = {
  title: 'Rodener Dajes Resume',
  description: 'Resume',
}

export default function Page() {
  return <Resume />
}
