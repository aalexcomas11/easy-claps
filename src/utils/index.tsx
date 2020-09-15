import { startCase } from 'lodash'

/**
 * creates function that prefixes takes a string with a className
 * using the following format className__string
 * @param className string to prefix class with
 */
export const classPrefixer = (className: string) => {
  return (str:string, separator='__') => `${className}${separator}${str}`
}

/**
 * creates a 4 dp unit given an integer
 * @param num - number to translate to 4dp grid unit
 */
export const fourDpUnit = (num: number) => `${num * 4}px`

/**
 * formats a Margin type or Padding type into a field that
 * the classnames package can consume
 * @param field - the string to prefix the classname with
 * @param obj - an object of type Margin or Padding
 */
export const spacingToClassnames = (field: string, obj:any) => {
  const o:any = {}
  const keys = Object.keys(obj || o)
  keys.filter((key) => {
    return typeof obj[key] !== 'number'
  }).forEach((key) => {
    o[`${field}-${key}-${obj[key]}`] = true
  })
  return o
}

/**
 * formats a Margin type or Padding type into a field that
 * that React inline styles can understand. the value will 
 * be the number the number provided multiplied by 4
 * @param field - the key in inline styles
 * @param obj - an object of type Margin or Padding
 */
export const spacingToStylesDP = (field: string, obj: any) => {
  const styles:any = {}
  const keys = Object.keys(obj || styles)
  keys.filter((key) => {
    return typeof obj[key] === 'number'
  }).forEach((key) => {
    styles[`${field}${startCase(key)}`] = fourDpUnit(obj[key])
  })
  return styles
}