import React from 'react';

import Section from './'

export const SectionSamples = () => {
  return (
    <>
      <Section
        color="primary"
        padding={{ top: 10, left: 10, bottom: 10, right: 10 }}
        margin={{ top: 10, bottom: 10, left: 5, right: 5 }}
        shadow
      >
        Section samples
      </Section>
      <Section
        color="secondary"
        padding={{ top: 10, left: 10, bottom: 10, right: 10 }}
        margin={{ top: 10, bottom: 10, left: 5, right: 5 }}
        shadow
      >
      </Section>
      <Section
        color="accent"
        padding={{ top: 10, left: 10, bottom: 10, right: 10 }}
        margin={{ top: 10, bottom: 10, left: 5, right: 5 }}
      >
        Section Samples
      </Section>
    </>
  )
}

export default {
  title: 'Section',
  component: SectionSamples,
};