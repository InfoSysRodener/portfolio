'use client'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaLink, FaLocationDot, FaRegFilePdf } from 'react-icons/fa6'
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'

export default function Resume() {
  const contentRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  })

  return (
    <main data-scroll-section ref={contentRef} className="relative m-auto max-w-3xl p-5 sm:p-8">
      <div className="absolute right-3 top-3 sm:right-10 sm:top-10 ">
        <button onClick={handlePrint} className="print-button cursor-pointer text-xs text-gray-500 hover:text-blue-600 sm:text-sm">
          <FaRegFilePdf />
          Print
        </button>
      </div>
      <header>
        <div className="flex items-end">
          <h1 className="text-3xl font-semibold sm:text-4xl">Rodener Dajes</h1>
          <span className="text-3xl ">&#44;</span>
          <span className="pl-2 text-sm text-gray-600 sm:text-2xl">Web Developer</span>
        </div>
        <div className="flex gap-2 pt-2 text-xs sm:text-sm">
          <p className="flex items-center gap-1">
            <FaLocationDot className="size-3" />
            Philippines&#44;
          </p>
          <p>Caloocan City</p>
        </div>
        <div className="w-full gap-2  pt-4 text-sm sm:text-base">
          <ul className="flex flex-wrap items-center gap-3 text-sm">
            <li className="flex items-center gap-1">
              <FaEnvelope className="size-4" />
              <a href="mailto:dajesrodener&@gmail.com">dajesrodener8@gmail.com</a>
            </li>
            <li className="flex items-center gap-1">
              <FaPhone className="size-4" />
              <a href="tel:+639695117642">+639695117642</a>
            </li>
            <li className="flex items-center gap-1">
              <FaLink className="size-4" />
              <a target="_blank" href="https://rodener.dev">
                rodener.dev
              </a>
            </li>
            <li className="flex items-center gap-1">
              <FaGithub className="size-4" />
              <a target="_blank" href="https://github.com/InfoSysRodener">
                Github
              </a>
            </li>
            <li className="flex items-center gap-1">
              <FaLinkedin className="size-4" />
              <a target="_blank" href="https://www.linkedin.com/in/rodener-dajes-92168b1b2/">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </header>
      <section className="my-2 bg-gray-100">
        <p className="my-2 px-2 py-3 text-sm">
          {/* Experienced web developer with a passion for creating attractive and interactive websites that meet customer needs and exceed expectations. */}
          Skilled in both front-end and back-end development, with the ability to quickly adapt to any tech stack. Committed to delivering
          high-quality, innovative web solutions and optimizing user experiences.
        </p>
      </section>
      <section>
        <header className="relative mb-3 after:absolute after:right-0 after:top-1/2 after:-z-10 after:block after:h-0.5 after:w-full after:bg-gray-300">
          <h2 className=" inline-block bg-white pr-5 font-bold text-blue-500">SKILLS</h2>
        </header>
        <section id="skills" className="my-2 flex flex-wrap ">
          <div>
            <h3>Base</h3>
            <ul>
              <li>HTML 5</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div>
            <h3>Framework / Library</h3>
            <ul>
              <li>Three js</li>
              <li>React js</li>
              <li>Next js</li>
              <li>Vue js</li>
              <li>Tailwind Css</li>
            </ul>
          </div>
          <div>
            <h3>3D Development</h3>
            <ul>
              <li>Three js</li>
              <li>React Three fiber</li>
              <li>GLSL</li>
              <li>blender</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Tools</h3>
            <ul>
              <li>Git</li>
              <li>Vite</li>
              <li>Postman</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Server / Database</h3>
            <ul>
              <li>AWS</li>
              <li>Vercel</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Backend </h3>
            <ul>
              <li>Node js</li>
              <li>Firebase</li>
              <li>Laravel</li>
            </ul>
          </div>
        </section>
      </section>
      <section className="mb-5">
        <header className="relative mb-3 after:absolute after:right-0 after:top-1/2 after:-z-10 after:block after:h-0.5 after:w-full after:bg-gray-300">
          <h2 className="inline-block bg-white pr-5 font-bold text-blue-500">WORK EXPERIENCE</h2>
        </header>
        <section className="relative mb-5">
          <header>
            <div className="flex gap-1">
              <h3 className="text-lg font-semibold">
                Indonesia Kaya <span className="text-base text-gray-500"> - Freelance</span>
              </h3>
              <div className="flex items-center">
                <FaLocationDot className="size-3 text-gray-500" />
                <p className="text-xs text-gray-400">indonesia</p>
              </div>
              <div className="absolute right-5 text-sm text-gray-500">2023-2024</div>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <FaLink className="size-3" />
              <a className="text-blue-400" target="_blank" href="https://arundaya.app/">
                arundaya.app
              </a>
            </div>
          </header>
          <div>
            <p className="text-sm">
              Responsible for translating designer mock-ups into functional web interfaces using nextjs with firebase integration for backend.
            </p>
            <br />
            <ul className="ml-10 list-disc text-sm">
              <li>Simplify and implement the social media login system</li>
              <li>Develop mini game and Avatar creation </li>
              <li>Validate & Ensure the data are synchronize for web and unity.</li>
            </ul>
          </div>
        </section>
        <section className="relative mb-5">
          <header>
            <div className="flex gap-1">
              <h3 className="text-lg font-semibold">ProjectSEED</h3>
              <div className="flex items-center">
                <FaLocationDot className="size-3 text-gray-500" />
                <p className="text-xs text-gray-400">Indonesia</p>
              </div>
              <div className="absolute right-5 text-sm text-gray-500">2021-2023</div>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <FaLink className="size-3" />
              <a className="text-blue-400" target="_blank" href="https://projectseed.com/">
                projectseed.com
              </a>
            </div>
          </header>
          <div>
            <p className="text-sm">
              Responsible for translating designer mock-ups into functional web interfaces, collaborating closely with both the Design and Blockchain
              teams.
            </p>
            <br />
            <ul className="ml-10 list-disc text-sm">
              <li>Implemented a responsive design that allowed the application to be used across multiple devices.</li>
              <li>Adhered to SEO best practices.</li>
              <li>Optimized website performance by converting images to web-friendly formats/extensions, ensuring faster loading.</li>
            </ul>
          </div>
        </section>
        <section className="relative mb-5">
          <header>
            <div className="flex gap-1">
              <h3 className="text-lg font-semibold">
                SelarasArtSpace <span className="text-base text-gray-500"> - Freelance</span>
              </h3>
              <div className="flex items-center">
                <FaLocationDot className="size-3 text-gray-500" />
                <p className="text-xs text-gray-400">indonesia</p>
              </div>
              <div className="absolute right-5 text-sm text-gray-500">2020-2021</div>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <FaLink className="size-3" />
              <a className="text-blue-400" target="_blank" href="https://selarasartspace.com/">
                selarasartspace.com
              </a>
            </div>
          </header>
          <div>
            <p className="text-sm">
              Responsible for implementing a complete web solution using NuxtJS for front-end and server infrastructure using AWS. Integrate AWS
              Cognito for secure user Authentication and AWS Amplify for seamless deployment and hosting.
            </p>
            <br />
            <ul className="ml-10 list-disc text-sm">
              <li>Display information of the artist and the painting outside the three.js canvas.</li>
              <li>Implement web controls to enhance the user experience and ensure smooth interactions.</li>
            </ul>
          </div>
        </section>
        <section className="relative mb-5">
          <header className=" flex items-center gap-1">
            <h3 className="text-lg font-semibold">Fourello</h3>
            <div className="flex items-center">
              <FaLocationDot className="size-3 text-gray-500" />
              <p className="text-xs text-gray-400">Mandaluyong City</p>
            </div>
            <div className="absolute right-5 text-sm text-gray-500">2018-2020</div>
          </header>
          <div className="flex items-center gap-1 text-sm">
            <FaLink className="size-3" />
            <a className="text-blue-400" target="_blank" href="https://www.fourello.com/">
              fourello.com
            </a>
          </div>
          <div>
            <p className="text-sm">
              Responsible for connecting AWS services, creating RESTful api endpoint with documentation. and working as an front-end developer for
              Admin panel, focusing on analytics and data management.
            </p>
            <br />
            <ul className="ml-10 list-disc text-sm">
              <li>Developed a RESTful API that served as a backend for mobile app and web application, using Laravel.</li>
              <li>
                Developed Admin page designed to showcase analytics data derived from their mobile app. specifically tailored for business owners.
              </li>
              <li>I set up a server, checked and maintained AWS services under the guidance of a my senior developer, ensuring proper execution.</li>
            </ul>
          </div>
        </section>
      </section>

      <section>
        <header className="relative mb-3 after:absolute after:right-0 after:top-1/2 after:-z-10 after:block after:h-0.5 after:w-full after:bg-gray-300">
          <h2 className="inline-block bg-white pr-5 font-bold text-blue-500">ONLINE COURSES</h2>
        </header>
        <section className="pb-3">
          <div className="flex items-end gap-1">
            <h3 className="text-lg font-semibold">THREEJS JOURNEY</h3>
            <h4 className="text-xs leading-5 text-gray-400">Bruno Simon</h4>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <FaLink className="size-3" />
            <a className="text-blue-400" target="_blank" href="https://threejs-journey.com/">
              threejs-journey.com
            </a>
          </div>
          <p className="pt-2  text-sm">
            Through practical practice in the Three.js course, I&apos;ve gained valuable skills and experience in utilizing Three.js to create
            immersive 3D web content.
          </p>
        </section>
        <section className="pb-3">
          <div className="flex items-end gap-1">
            <h3 className="text-lg font-semibold">NFT Marketplace Course</h3>
            <h4 className="text-xs leading-5 text-gray-400">JS Mastery</h4>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <FaLink className="size-3" />
            <a className="text-blue-400" target="_blank" href="https://www.jsmastery.pro/">
              jsmastery.pro
            </a>
          </div>
          <p className="pt-2  text-sm">
            The NFT Marketplace Course Mastery teaches the use of Next.js, Tailwind, and popular Web3 concepts and technologies, including smart
            contract development, Solidity, IPFS, and more, providing hands-on, practical experience.
          </p>
        </section>
      </section>
      <section className="mb-3">
        <header className="relative mb-3 after:absolute after:right-0 after:top-1/2 after:-z-10 after:block after:h-0.5 after:w-full after:bg-gray-300">
          <h2 className="inline-block bg-white pr-5 font-bold text-blue-500">EDUCATION</h2>
        </header>
        <section className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Bachelor of Science - Information System</h3>
            <h4 className="flex text-sm text-gray-500">
              <FaLocationDot />
              University of Caloocan City
            </h4>
          </div>
          <div>
            <p className="text-sm text-gray-500">2014 - 2018</p>
          </div>
        </section>
      </section>
    </main>
  )
}
