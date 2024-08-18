import Link from 'next/link'

const Header = () => {
  return (
    <header className=" relative z-10 m-auto flex max-w-3xl items-center  justify-between p-5  px-3 text-primary_blue outline-none sm:px-10 sm:py-5">
      <h2 className="cursor-pointer py-1 text-xl font-bold leading-5 tracking-widest ">
        <span className="font-tagalog">ᜍ᜔ᜇᜒᜈᜒᜍ᜔</span>
      </h2>
      <h2 className="rounded-sm p-2 font-pixel text-base font-bold leading-3 transition ease-in-out hover:bg-primary_red hover:text-primary_brown">
        <Link href="/resume">Resume</Link>
      </h2>
    </header>
  )
}

export default Header
