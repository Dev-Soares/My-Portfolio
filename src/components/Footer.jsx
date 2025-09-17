import React from 'react'

const Footer = () => {
  return (
    <footer className=' h-auto min-h-50 bg-gray-950 w-full flex flex-col justify-center text-white text-center p-8 py-12 font-text text-lg xl:text-xl  '>
        <hr className='text-white w-[95%] xl:w-[80%] self-center' />
        <div className='w-full flex flex-col justify-center items-center gap-4 mt-4'>
            <p>Desenvolvido por <span className='text-[var(--color-main)] text-lg md:text-xl lg:text-2xl'>Bernardo Soares</span></p>
        </div>
    </footer>
  )
}

export default Footer
