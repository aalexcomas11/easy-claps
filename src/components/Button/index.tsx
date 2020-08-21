import React from 'react'
import cx from 'classnames'

interface ButtonProps{
  className?: string
  color?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  text: string
}

const initPrefixer = (className: string) => {
  return (str:string) => `${className}__${str}`
}
const px = initPrefixer('clappy-button')

const Button: React.FC<ButtonProps> = ({ className, color, size,text, ...rest}) => {
  const classes = cx('clappy-button', {
    [className!]: className,
    [px(color!)]: color,
    [px(size!)]: size
   
  })
  return <button {...rest} className={classes}>{text || 'Add some text bro'}</button>
}

export default Button