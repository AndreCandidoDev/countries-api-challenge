"use client"
import { countryType } from '@/types/countryType';
import { ReactNode, createContext, useState } from 'react'

type Props = {
  children: ReactNode;
}

type modeOptions = "light" | "dark"

interface appContextType {
  mode: modeOptions
  data: countryType[]
  setData: React.Dispatch<React.SetStateAction<countryType[]>>
  setMode: React.Dispatch<React.SetStateAction<modeOptions>>
}

const defaultProvider: appContextType = {
  mode: "dark",
  data: [],
  setData: () => {},
  setMode: () => {},
}

const AppContext = createContext<appContextType>(defaultProvider)

const AppProvider = ({ children }: Props) =>
{
  const [data, setData] = useState<countryType[]>(defaultProvider.data)
  const [mode, setMode] = useState<modeOptions>(defaultProvider.mode)

  const values = {
    data,
    mode,
    setData,
    setMode,
  }

  return (<AppContext.Provider value={values}>{children}</AppContext.Provider>)
}

export { AppContext, AppProvider };