import { createContext, useState } from 'react'

export const LoadingContext = createContext()

export const LoadingProvider = ({ children }) => {
  const [valorBarra, setValorBarra] = useState(0)

  return (
    <LoadingContext.Provider value={{ valorBarra, setValorBarra }}>
      {children}
    </LoadingContext.Provider>
  )
}