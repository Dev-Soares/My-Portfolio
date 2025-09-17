import React from 'react'

const CardTech = ({borderColor, stackImg, delay}) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-delay={delay}>
      <div className={`w-[100%] max-w-45 xl:max-w-50 flex flex-col justify-between items-center gap-4 border-2 ${borderColor} rounded-3xl p-4 hover:scale-105 transition-all duration-1000 transform shadow-sm`}>
        <img src={stackImg} alt="Stack Icon" />
      
    </div>
    </div>
    
  )
}

export default CardTech
