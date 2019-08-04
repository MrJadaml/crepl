import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/atoms/button';
import Heading from '../components/atoms/heading';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button>😀 😎 👍 💯</Button>
  ));

storiesOf('Heading', module)
  .add('All heading types', () => (
    <>
      <Heading type="h1">h1 Heading</Heading>
      <Heading type="h2">h2 Heading</Heading>
      <Heading type="h3">h3 Heading</Heading>
      <Heading type="h4">h4 Heading</Heading>
      <Heading type="h5">h5 Heading</Heading>
      <Heading type="h6">h6 Heading</Heading>
    </>
  ))
