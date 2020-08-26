import React from 'react';

import P from './'

export const ParagraphSamples = () => {
  return (
    <>
      <P color="primary" size="xl" margin={{top: 10}}>
        hello
      </P>
      <P color="primary" size="lg">
        hello
      </P>
      <P color="secondary" size="md">
        hello
      </P>
      <P color="primary" size="sm">
        hello
      </P>
      <P color="accent" size="xs">
        hello
      </P>
    </>
  )
}

export default {
  title: 'Paragraph',
  component: ParagraphSamples,
};