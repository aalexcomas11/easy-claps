import React, { ReactNode } from 'react'
import cx from 'classnames'
import {Properties} from 'csstype'
  
import {classPrefixer, fourDpUnit} from '../../utils'

import '../../sass/components/Hx.sass'

interface HeaderProps {
  className?: string
  color?: 'primary' | 'secondary' | 'accent'
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
  style?: Properties
}

const px = classPrefixer('clappy-header')

const Header: React.FC<HeaderProps> = ({ className, color,tag,children,...rest}) => {
  const classes = cx('clappy-header', {
    [className!]: className,
    [px(color!)]: color,
  })

  switch (tag) {
    case 'h1':
      return <h1 {...rest} className={classes}>{children}</h1>
    case 'h2':
      return <h2 {...rest} className={classes}>{children}</h2>
    case 'h3':
      return <h3 {...rest} className={classes}>{children}</h3>
    case 'h4':
      return <h4 {...rest} className={classes}>{children}</h4>
      case 'h5':
      return <h5 {...rest} className={classes}>{children}</h5>
    case 'h6':
      return <h6 {...rest} className={classes}>{children}</h6>
    default:
      return <h1 {...rest} className={classes}>{children}</h1>
  }
}

export default Header

interface HxProps {
  className?: string
  color?: 'primary' | 'secondary'
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  style?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  lineHeight?: number
  marginBottom?: number
  children: ReactNode
}

export const Hx: React.FC<HxProps> = ({className,children,tag,style,lineHeight,marginBottom, ...rest}) => {
  const classes = cx(`clappy-${style || tag || 'h1'}`, {
    [className!]: className,
  })
  const styles = {
    ...(lineHeight &&{lineHeight: fourDpUnit(lineHeight)}),
   ...(marginBottom &&{marginBottom: fourDpUnit(marginBottom)}),
  }
  return (
    <Header style={styles} className={classes} tag={tag} {...rest}>
      {children}
    </Header>
  )
}