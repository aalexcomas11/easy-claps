import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../Button'

export const ButtonSamples = () => {
  return (
    <>
    <Button
        onClick={action('clicked')}
        size="sm"
        color="primary"
        text="Primary"
      />
      <br></br>
      <br></br>
      <Button
        onClick={action('clicked')}
        size="sm"
        color="secondary"
        text="Secondary"
      />
      <br></br>
      <br></br>
      <Button
        onClick={action('clicked')}
        size="md"
        color="primary"
        text="Primary"
      />
      <br></br>
      <br></br>
      <Button
        onClick={action('clicked')}
        size="md"
        color="secondary"
        text="Secondary"
      />
      <br></br>
      <br></br>
      <Button
        onClick={action('clicked')}
        size="lg"
        color="primary"
        text="Primary lg"
      />
       <br></br>
      <br></br>
      <Button
        onClick={action('clicked')}
        size="lg"
        color="secondary"
        text="secondary lg"
      />
    </>
  )
}

export default {
  title: 'Button',
  component: Text,
};
