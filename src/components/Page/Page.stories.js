import React from 'react';

import Page from './'

export const PageSamples = () => {
  return (
    <>
      <Page
        style={{background: '#03a9f4'}}
      >
        Page Sample width default max width of 1400px
      </Page>
      <br />
      <Page
        style={{ background: '#254e70' }}
        padding={{left:10,right:10,bottom:10,top: 10}}
      >
        Default width 10DP padding all around
      </Page>
    </>
  )
}

export default {
  title: 'Page',
  component: PageSamples,
};