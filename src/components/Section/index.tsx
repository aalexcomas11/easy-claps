import React, {ReactNode} from 'react'
import { Properties } from 'csstype'
import cx from 'classnames'

import { Padding, Margin, Colors } from '../../types/props'
import { classPrefixer, spacingToClassnames, spacingToStylesDP } from '../../utils'
import '../../sass/components/Section.sass'


interface SectionProps{
  className?: string
  padding?: Padding
  margin?: Margin,
  color?: Colors,
  shadow?: boolean
  children?: ReactNode
  style?: Properties
}

const CLASS = 'clappy-section'

const px = classPrefixer(CLASS)

const Section: React.FC<SectionProps> = ({className,color,children,padding,margin,style,shadow, ...rest}) => {

  const classes = cx(CLASS, {
      ...spacingToClassnames(px('padding'), padding),
      ...spacingToClassnames(px('margin'),margin),
      [className!]: className,
      [px(color!)]: color,
      [px('shadow')]: shadow
  })
  
  const styles = {
    ...style,
    ...spacingToStylesDP('padding', padding),
    ...spacingToStylesDP('margin', margin),
  }

  return (
    <div className={classes} style={styles} {...rest}>
      {children}
    </div>
  )
}

export default Section