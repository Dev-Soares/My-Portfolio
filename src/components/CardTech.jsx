import React from 'react'

const CardTech = ({borderColor, stackImg}) => {
  return (
    <div className={`w-[40%] max-w-45 xl:max-w-50 flex flex-col justify-between items-center gap-4 border-2 ${borderColor} rounded-3xl p-4 hover:scale-105 transition-all duration-1000 transform`}>
        <img src={stackImg} alt="Stack Icon" />
      
    </div>
  )
}

export default CardTech
