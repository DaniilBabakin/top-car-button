import React from "react"
import { GlobalStylesType } from "./App"

type ContextType = GlobalStylesType

export const ThemeContext = React.createContext<ContextType>(
  {} as ContextType
)
