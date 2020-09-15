import React from 'react';

import Grid,{Cell} from './'

export const GridSamples = () => {
  return (
    <>
      <Grid
        cellSize="full-lg"
        gutters
        style={{ textAlign: 'center' }}
      >
        <Cell>
          Standard Grid fit
        </Cell>
        <Cell>
          Standard Grid fit
        </Cell>
        <Cell>
          Standard Grid fit
        </Cell>
      </Grid>
      <Grid
        cellSize="full"
        gutters
        style={{ textAlign: 'center' }}
      >
        <Cell>
          Standard Grid fit
        </Cell>
        <Cell>
          Standard Grid fit
        </Cell>
        <Cell>
          Standard Grid fit
        </Cell>
      </Grid>
    </>
  )
}

export default {
  title: 'Grid',
  component: GridSamples,
};