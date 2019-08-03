import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/atoms/button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button>😀 😎 👍 💯</Button>
  ));
