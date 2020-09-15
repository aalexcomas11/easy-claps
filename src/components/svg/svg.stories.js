import React from 'react';

import {SolidDiamondIcon, HorizontalLine} from './'

export const SVGSamples = () => {
  return (
    <>
      <br />
      <HorizontalLine
        width="100%"
        height="20px"
      />
      <HorizontalLine
        width="100px"
        height="10px"
        fill="#03a9f4"
      />
      <br />
      <SolidDiamondIcon
        height="30px"

      />
       <br />
      <SolidDiamondIcon
        height="30px"
        fill="red"
        fill="#254e70"
      />
    </>
  )
}

export default {
  title: 'SVG',
  component: SVGSamples,
};