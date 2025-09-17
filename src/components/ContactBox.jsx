import React from 'react'

const ContactBox = ({contactIcon, contactLink}) => {
  return (
    <a href={contactLink} className='w-auto h-full flex justify-center items-center border-2 border-[var(--color-main)] rounded-2xl py-2  hover:bg-[var(--color-main)] transition-all duration-1000 cursor-pointer max-w-55 max-h-32' target="_blank">
            <img src={ contactIcon } alt="Icone Contato" className={` w-[50%]`}/>
    </a>
  )
}

export default ContactBox
