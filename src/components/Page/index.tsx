import React, { ReactNode } from 'react'
import { Properties } from 'csstype'
import cx from 'classnames'

import { Padding } from '../../types/props'
import { classPrefixer, spacingToClassnames, spacingToStylesDP } from '../../utils'

import '../../sass/components/Page.sass'

export interface PageProps{
  className ?: string
  padding?: Padding
  style?: Properties 
  children?: ReactNode
}

const CLASS = 'clappy-page'
const MAX_WIDTH = '1400px'

const px = classPrefixer(CLASS)

const Page: React.FC<PageProps> = ({ padding, className, style={}, children }) => {
  
   const classes = cx(CLASS, {
     [className!]: className,
     ...spacingToClassnames(px('padding'), padding),
   })
  
  const styles = {
    ...style,
    ...(!style.maxWidth && {maxWidth: MAX_WIDTH}),
    ...spacingToStylesDP('padding', padding),
  }
  
  return <div style={styles} className={classes}>{children}</div>
}

export default Page