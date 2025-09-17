import React from 'react'

const ContactBox = ({contactIcon, contactLink, delay}) => {
  return (
    <div  data-aos="fade-down" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay={delay}>
      <a href={contactLink} className='w-auto h-full flex justify-center items-center border-2 border-[var(--color-main)] rounded-2xl py-2  hover:bg-[var(--color-main)] transition-all duration-1000 cursor-pointer max-w-55 max-h-32 shadow-md shadow-purple-600' target="_blank">
            <img src={ contactIcon } alt="Icone Contato" className={` w-[50%]`}/>
    </a>
    </div>
    
  )
}

export default ContactBox
