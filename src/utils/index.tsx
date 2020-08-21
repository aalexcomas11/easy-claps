/**
 * creates function that prefixes takes a string with a className
 * using the following format className__string
 * @param className string to prefix class with
 */
export const classPrefixer = (className: string) => {
  return (str:string) => `${className}__${str}`
}

/**
 * creates a 4 dp unit given an integer
 * @param num - number to translate to 4dp grid unit
 */
export const fourDpUnit = (num: number) => `${num * 4}px`