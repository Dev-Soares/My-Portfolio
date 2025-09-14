import { useState } from "react"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className=" z-50 w-full h-full text-white ">
            <nav className="flex justify-between md:justify-around items-center p-5 ">
                <div className=" text-lg md:text-xl lg:text-2xl font-title-sec text-[var(--color-main)]">
                    <h1>Bernardo Soares</h1>
                </div>
                <div className='flex md:hidden justify-center items-center font-text'>
                    <button className='md:hidden text-[var(--color-white)] text-2xl flex flex-col justify-center items-center' onClick={() => setIsOpen(!isOpen)}>
                        <span className='h-0.5 w-6 bg-[var(--color-white)] transition-all duration-300'></span>
                        <span className='h-0.5 w-6 bg-[var(--color-white)] my-1 transition-all duration-300'></span>
                        <span className='h-0.5 w-6 bg-[var(--color-white)] transition-all duration-300 '></span>

                    </button>
                </div>
                <ul className="hidden md:flex lg:text-lg xl:text-xl  items-center gap-6 p-4 transition-all duration-300 font-text">
                    <li>Sobre mim</li>
                    <li>Tecnologias</li>
                    <li>Projetos</li>
                </ul>
            </nav>
            {isOpen && <ul className="flex flex-col items-center gap-4 p-4 transition-all duration-300 font-text">
                    <li>Sobre mim</li>
                    <li>Tecnologias</li>
                    <li>Projetos</li>
                </ul>}
        </header>

    )
}

export default Navbar
