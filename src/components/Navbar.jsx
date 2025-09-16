import { useState } from "react"


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className=" absolute w-full h-auto text-white z-50 top-0 ">
            <nav className="flex justify-between md:justify-around items-center p-5 ">
                <div className=" hidden md:block text-xl md:text-2xl lg:text-3xl font-title text-white">
                    <h1 className="transition-all transform hover:text-[var(--color-main)] duration-800">Bernardo Soares</h1>
                </div>
                   
                <ul className="flex lg:text-lg xl:text-xl  items-center gap-12 xl:gap-16 p-4 font-title-sec">
                    <li className="relative link-animado transition-all transform hover:text-[var(--color-main)] duration-800 cursor-pointer">Sobre mim</li>
                    <li className="relative link-animado transition-all transform hover:text-[var(--color-main)] duration-800 cursor-pointer">Tecnologias</li>
                    <li className="relative link-animado transition-all transform hover:text-[var(--color-main)] duration-800 cursor-pointer">Projetos</li>
                </ul>
            </nav>
            {isOpen && <ul className="flex md:hidden flex-col items-center gap-4 p-4 transition-all duration-300 font-text">
                    <li>Sobre mim</li>
                    <li>Tecnologias</li>
                    <li>Projetos</li>
                </ul>}
        </header>

    )
}

export default Navbar
