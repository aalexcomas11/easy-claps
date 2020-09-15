import React, { ReactNode } from 'react'
import cx from 'classnames'
import {Properties} from 'csstype'
  
import {classPrefixer} from '../../utils'

import '../../sass/components/Grid.sass'

interface GridProps {
  gutters?: boolean,
  align?: 'top' | 'left' | 'center'
  cellSize?: 'fit' | 'quarter' | 'half' | 'fourth' | 'full' |
  'fit-sm' | 'quarter-sm' | 'half-sm' | 'fourth-sm' | 'full-sm' |
  'fit-lg' | 'quarter-lg' | 'half-lg' | 'fourth-lg' | 'full-lg'
  style?: Properties
  children: ReactNode
  className?: string
}

const GRID_CLASS = 'clappy-grid'
const px = classPrefixer(GRID_CLASS)

const Grid: React.FC<GridProps> = ({ className, align, style, gutters,cellSize, children }) => {
  
  const classes = cx(GRID_CLASS, {
    [className!]: className,
    [px(align!,'-')]: align,
    [px('gutters','-')]: gutters,
    [px(cellSize!,'-')]: cellSize
  })

  return (
    <div
      className={classes}
      style={style}
    >
      {children}
    </div>
  )
}

export default Grid

export interface CellProps {
  width?:
  'fit' | 'quarter' | 'half' | 'fourth' | 'full' |
  'fit-sm' | 'quarter-sm' | 'half-sm' | 'fourth-sm' | 'full-sm' |
  'fit-lg' | 'quarter-lg' | 'half-lg' | 'fourth-lg' | 'full-lg'
  align?: 'top' | 'bottom' | 'center'
  style?: Properties
  children: ReactNode
  className?: string
}

const CELL_CLASS = `${GRID_CLASS}__clappy-cell`
const cellPx = classPrefixer(CELL_CLASS)

export const Cell: React.FC<CellProps> = ({ className, width, align, style, children }) => {
  
  const classes = cx(CELL_CLASS, {
    [className!]: className,
    [cellPx(width!,'-')]: width,
    [cellPx(align!,'-')]: align
  })

  return (
    <div
      className={classes}
      style={style}
    >
      {children}
    </div>
  )
}