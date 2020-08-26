import React, {ReactNode} from 'react'
import cx from 'classnames'
import {Properties} from 'csstype'

import { classPrefixer, fourDpUnit, spacingToClassnames,spacingToStylesDP } from '../../utils'
import { Padding, Margin } from '../../types/props'
import '../../sass/components/P.sass'

interface PProps{
  className?: string
  color?: 'primary' | 'secondary' | 'accent' | 'white' | 'light-grey' | 'grey' | 'dark-grey' | 'darker-grey'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  lineHeight?: number
  padding?: Padding
  margin?: Margin
  children?: ReactNode
  style?: Properties
}

const px = classPrefixer('clappy-paragraph')

const P: React.FC<PProps> = ({className,color,children,padding,size,margin,style,lineHeight, ...rest}) => {
  const classes = cx('clappy-paragraph', {
    ...spacingToClassnames(px('padding'), padding),
    ...spacingToClassnames(px('margin'),margin),
    [className!]: className,
    [px(color!)]: color,
     [px(size!)]: size
  })
  
  const styles = {
    ...style,
    ...spacingToStylesDP('padding', padding),
    ...spacingToStylesDP('padding', margin),
    ...(lineHeight &&{lineHeight: fourDpUnit(lineHeight)}),
  }
  
  return (
    <p className={classes} style={styles} {...rest} >{children}</p>
  )
}


export default P