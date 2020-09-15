import React from 'react'

export interface IconProps{
  fill?: string,
  height?: string,
  width?: string,
}

export const SolidDiamondIcon: React.FC<IconProps> = ({fill="#03a9f4", height="16.97px", width="16.97px"}) => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{height,width}} viewBox="0 0 16.971 16.97">
    <rect id="Rectangle_159" data-name="Rectangle 159" width="12" height="12" transform="translate(0 8.485) rotate(-45)" fill={fill}/>
  </svg>
)

export const HorizontalLine: React.FC<IconProps> = ({fill="#254e70", height="2px", width="100px"}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" style={{width, height}} preserveAspectRatio="none">
    <rect id="Rectangle_170" data-name="Rectangle 170" width="100%" height="100%" fill={fill}/>
  </svg>
)

export const HorizontalLineOriginal: React.FC<IconProps> = ({fill="#254e70", height="2px", width="100px"}) => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ height, width }} viewBox="0 0 16.971 16.97" preserveAspectRatio="none">
    <rect id="Rectangle_170" data-name="Rectangle 170" width="100%" height="2" fill={fill}/>
  </svg>
)