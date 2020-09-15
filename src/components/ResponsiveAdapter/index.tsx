import React, { ReactNode } from 'react';
import {SectionProps} from '../Section'
import { classPrefixer } from '../../utils'
// import { assertFC } from '../../utils/assertFC';

interface BreakPoints<T>{
  phablet?: T,
  tablet?: T,
  laptop?: T,
  desktop?: T
}

type ResponsiveComponent = SectionProps

export interface ResponsiveAdapterProps<T> {
  breakPoints: BreakPoints<T>
  Component: React.FC<ResponsiveComponent>
  children?: ReactNode
  className?: 'string'
}

const CLASS_NAME = 'ResponsiveAdapter'

// export function ResponsiveAdapter<T>({children,Component,className,breakPoints}: BaseSelectProps<T>) {
const ResponsiveAdapter = <T extends object>({children,Component,className,breakPoints}: ResponsiveAdapterProps<T>)=>{
  const px = classPrefixer(CLASS_NAME)
  return (
    <>
      {
        Object.keys(breakPoints).map((key) => {
          const k = key as keyof BreakPoints<T>
          return (
            <Component className={`${px(key)} ${className || ''}`} {...breakPoints[k]}>
              {children}
            </Component>
          )
        })
      }
    </>
  )
}

export default ResponsiveAdapter

// assertFC(Select);