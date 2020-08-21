import React from 'react';

import { Hx } from './'

export const HeaderSamples = () => {
  return (
    <>
      <Hx color="secondary" tag="h1">
        Examples of headers 
      </Hx>
      <Hx color="secondary" tag="h2">
        Examples of headers
      </Hx>
      <Hx color="accent" tag="h3">
        Examples of headers
      </Hx>
      <Hx color="secondary" tag="h4">
        Examples of headers
      </Hx>
      <Hx color="secondary" tag="h5">
        Examples of headers
      </Hx>
      <Hx color="primary" tag="h6">
        Examples of headers
      </Hx>
    </>
  )
}

export default {
  title: 'Header',
  component: HeaderSamples,
};