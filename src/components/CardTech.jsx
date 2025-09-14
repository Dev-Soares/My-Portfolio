import React from 'react'

const CardTech = ({borderColor, stackImg}) => {
  return (
    <div className={`w-[40%] max-w-50 flex flex-col justify-between items-center gap-4 border-2 ${borderColor} rounded-3xl p-4`}>
        <img src={stackImg} alt="Stack Icon" />
      
    </div>
  )
}

export default CardTech
