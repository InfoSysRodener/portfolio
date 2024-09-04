import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full py-5 text-center">
      {/* <p className="font-pixel text-2xl font-semibold  text-primary_blue">Rodener Dajes</p> */}
      <div className="w-full gap-2 py-4 text-center text-sm sm:text-base">
        <ul className="flex flex-wrap items-center justify-center gap-3 text-sm ">
          <li className="flex items-center gap-1 text-primary_blue transition duration-150 ease-in-out hover:text-secondary_blue">
            <a href="mailto:dajesrodener&@gmail.com" aria-label="You can Email me!">
              <FaEnvelope className="size-4" aria-label="Email Icon" />
            </a>
          </li>
          <li className="flex items-center gap-1 text-primary_blue transition duration-150 ease-in-out hover:text-secondary_blue">
            <a target="_blank" href="https://github.com/InfoSysRodener" aria-label="Visit my Github profile">
              <FaGithub className="size-4" aria-label="Github Icon" />
            </a>
          </li>
          <li className="flex items-center gap-1 text-primary_blue transition duration-150 ease-in-out hover:text-secondary_blue">
            <a target="_blank" href="https://www.linkedin.com/in/rodener-dajes-92168b1b2/" aria-label="Visit my LinkedIn profile">
              <FaLinkedin className="size-4" aria-label="LinkedIn Icon" />
            </a>
          </li>
        </ul>
      </div>

      <p className="font-outfit text-sm text-gray-600 ">&copy; {year} Rodener Dajes</p>
    </footer>
  )
}

export default Footer
