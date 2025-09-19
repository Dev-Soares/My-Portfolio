


const Navbar = () => {

    return (
        <header className=" bg-gray-800 absolute w-full h-auto text-white z-50 top-0 ">
            <nav className="flex justify-center md:justify-between lg:justify-around items-center p-5 ">
                <div className=" w-[20%] hidden md:flex flex-col justify-center items-center ">
                  <img src="logo.png" alt="Logo Bernardo Soares" className="w-[60%] lg:w-[40%] xl:w-[30%]" />
                </div>
                   
                <ul className="flex justify-center text-lg lg:text-xl xl:text-2xl  items-center gap-12 xl:gap-16 p-4 menu-item">
                    <li className="relative link-animado transition-all transform hover:text-[var(--color-main)] duration-800 cursor-pointer">Sobre </li>
                    <li className="relative link-animado transition-all transform hover:text-[var(--color-main)] duration-800 cursor-pointer">Tecnologias</li>
                    <li className="relative link-animado transition-all transform hover:text-[var(--color-main)] duration-800 cursor-pointer">Projetos</li>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar
