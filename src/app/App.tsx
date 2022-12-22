import React from "react"
import "./App.scss"
import { ThemeContext } from "./context"
import { makeStyles } from "../helpers/makeStyles"
import { Button } from "../components/Button"

export type GlobalStylesType = {
  button: Record<string, string>
}

function App() {
  const classes = makeStyles({
    button: `font-size: 16px;background-color:red;height: 50vh`,
  })
  return (
    <ThemeContext.Provider value={classes}>
      <div className="App">
        <Button label="Кнопка" />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
