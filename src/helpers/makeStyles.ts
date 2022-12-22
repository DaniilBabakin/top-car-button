import { GlobalStylesType } from "../app/App"

type MakeStylesProps = Record<keyof GlobalStylesType,string>

type MakeStylesType = (styles:MakeStylesProps) => GlobalStylesType

export const makeStyles: MakeStylesType = (styles) => {
  const styleValueToArray = Object.entries(styles).map(([key, value]) => [
    key,
    transformToUpperCase(value).split(";"),
  ])

  return styleValueToArray.reduce((acc, [key, value]) => {
    if (Array.isArray(value) && typeof key === "string") {
      const ObjectOfValues = value.reduce((accum, string) => {
        const splittedString = string.split(":")
        Object.assign(accum, { [splittedString[0]]: splittedString[1] })
        return accum
      }, {})
      Object.assign(acc, { [key]: ObjectOfValues })
    }
    return acc
  }, {}) as GlobalStylesType
}

const transformToUpperCase = (lowerString: string) => {
  return lowerString
    .replace(/[-]([\s]*?)([a-zA-Z])/gm, (group) => {
      return group.toUpperCase().replace("-", "")
    })
    .replace(/([\s]*)/g, "")
}
