import React, { useContext } from "react"
import { ThemeContext } from "../app/context"
import "./button.scss"

interface ButtonProps {
  backgroundColor?: string
  label: string
  onClick?: () => void
}

export const Button = ({
  label,
  onClick,
  backgroundColor,
}: ButtonProps) => {
  const classes = useContext(ThemeContext)
  return (
    <button
      type="button"
      className="button"
      style={{ ...classes.button, backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
