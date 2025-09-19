import React from 'react'

const Footer = () => {
  return (
    <footer className=' h-auto min-h-50 bg-gray-950 w-full flex flex-col justify-center text-white text-center p-12 py-16 font-text text-xl xl:text-2xl  '>
      <div className='w-full flex flex-col justify-center items-center gap-4 mb-5'>
            <img src="logo.png" alt="Logo Bernardo Soares" className='w-[40%] md:w-[25%] lg:w-[15%] xl:w-[10%]' />
      </div>
        <hr className='text-white w-[95%] xl:w-[80%] self-center' />
        <div className='w-full flex flex-col justify-center items-center gap-4 mt-10'>
            <p>Desenvolvido por <span className='text-[var(--color-main)] text-xl md:text-2xl lg:text-3xl font-title-sec'>Bernardo Soares</span></p>
        </div>
    </footer>
  )
}

export default Footer
