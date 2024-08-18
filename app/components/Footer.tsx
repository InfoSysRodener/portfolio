import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full py-5 text-center">
      {/* <p className="font-pixel text-2xl font-semibold  text-primary_blue">Rodener Dajes</p> */}
      <div className="w-full gap-2 py-4 text-center text-sm sm:text-base">
        <ul className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <li className="flex items-center gap-1">
            <a href="mailto:dajesrodener&@gmail.com">
              <FaEnvelope className="size-4" />
            </a>
          </li>
          <li className="flex items-center gap-1">
            <a target="_blank" href="https://github.com/InfoSysRodener">
              <FaGithub className="size-4" />
            </a>
          </li>
          <li className="flex items-center gap-1">
            <a target="_blank" href="https://www.linkedin.com/in/rodener-dajes-92168b1b2/">
              <FaLinkedin className="size-4" />
            </a>
          </li>
        </ul>
      </div>

      <p className="font-outfit text-sm font-semibold">&copy; {year} Rodener Dajes</p>
    </footer>
  )
}

export default Footer
