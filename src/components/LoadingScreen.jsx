import React, { useContext, useEffect } from 'react'
import { Progress } from './components/ui/progress'
import { LoadingContext } from '../contexts/LoadingContext'

const LoadingScreen = () => {
  const { valorBarra, setValorBarra } = useContext(LoadingContext)

  useEffect(() => {
    if (valorBarra < 100) {
      const timer = setTimeout(() => {
        setValorBarra(valorBarra + 2)
      }, 40)
      return () => clearTimeout(timer)
    }
  }, [valorBarra, setValorBarra])

  return (
    <main className='w-full h-screen bg-gradient-to-b from-neutral-900 via-neutral-900 to-violet-900 flex flex-col justify-center items-center text-white  font-title-sec gap-8 lg:gap-14'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl' >Portfolio <span className='text-[var(--color-main)]'>Dev-Soares</span></h1>
      <div className='w-full flex justify-center items-center flex-row gap-4'>
        <Progress value={valorBarra} />
        <h2 className='text-md md:text-lg'>{valorBarra}%</h2>
      </div>
      
    </main>
  )
}

export default LoadingScreen
