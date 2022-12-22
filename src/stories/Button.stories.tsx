import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button } from "../components/Button"
import { ThemeContext } from "../app/context"
import { makeStyles } from "../helpers/makeStyles"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  decorators: [
    (storyFn) => {
      const classes = makeStyles({
        button: `color: white; background-color: #1976d2; padding:10px;borderRadius:5px`,
      })
      return (
        <ThemeContext.Provider value={classes}>
          {storyFn()}
        </ThemeContext.Provider>
      )
    },
  ],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />
}

export const Contained = Template
Contained.args = {
  label: "Contained",
}
