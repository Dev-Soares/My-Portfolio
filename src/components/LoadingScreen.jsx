import React, { useContext, useEffect } from 'react'
import { Progress } from './components/ui/progress'
import { LoadingContext } from '../contexts/LoadingContext'
import { StarsBackground } from './animate-ui/components/backgrounds/stars'

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
    <StarsBackground>
      <main className='w-full h-screen bg-gradient-to-b from-black to-violet-900 flex flex-col justify-center items-center text-white  font-headline gap-8 lg:gap-14'> 
        <div className='w-full flex flex-col justify-center items-center gap-2 lg:gap-6'>
          <div className='flex flex-col justify-center items-center gap-0 lg:gap-2px-8 '>
                  <img src="logo.png" alt="Logo Bernardo Soares" className='w-[60%]' />
          </div>
          <div className='flex flex-row justify-center items-center gap-4 lg:gap-6 w-[80%] md:w-[60%] lg:w-[40%]'>
            <Progress value={valorBarra} />
          <h2 className='text-md md:text-lg font-text'>{valorBarra} %</h2>
          </div>
          
        </div>

      </main>
    </StarsBackground>
  )
}

export default LoadingScreen
