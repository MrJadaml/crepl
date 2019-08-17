import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../components/atoms/button';
import { Heading } from '../components/atoms/heading';
import { Input } from '../components/atoms/input';
import { Textarea } from '../components/atoms/textarea';
import { Label } from '../components/atoms/label';
import { Link } from '../components/atoms/link';
import { Picture } from '../components/atoms/picture';

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
  ));

storiesOf('Input', module)
  .add('Text (Default)', () => <Input /> )
  .add('Search', () => <Input type="search" /> )
  .add('Email', () => <Input type="email" /> )
  .add('Password', () => <Input type="password" /> )
  .add('URL', () => <Input type="url" /> )
  .add('Tele', () => <Input type="tel" /> )
  .add('Number', () => <Input type="number" /> )
  .add('Date', () => <Input type="date" /> )
  .add('Date Local', () => <Input type="datetime-local" /> )
  .add('Month', () => <Input type="month" /> )
  .add('Week', () => <Input type="week" /> )
  .add('Time', () => <Input type="time" /> )
  .add('Checkbox', () => <Input type="checkbox" /> )
  .add('Radio', () => <Input type="radio" /> )
  .add('Color', () => <Input type="color" /> )
  .add('Range', () => <Input type="range" /> )
  .add('File', () => <Input type="file" /> )
  .add('Reset', () => <Input type="reset" /> )
  .add('Submit', () => <Input type="submit" /> )
  .add('Button', () => <Input type="button" /> )

storiesOf('Textarea', module)
  .add('With text', () => (
    <Textarea value="Hello Textarea"></Textarea>
  ))

storiesOf('Label', module)
  .add('Default', () => <Label /> )

storiesOf('Link', module)
  .add('Default', () => <Link href="#">blah</Link> )

storiesOf('Picture', module)
  .add('Default image', () => (
    <Picture src="https://via.placeholder.com/300x200" />
  ))
  .add('Source Set', () => (
    <Picture
      src="https://via.placeholder.com/900x900"
      sources={[
        { srcset: "https://via.placeholder.com/300x300" }
      ]}
    />
  ))
  .add('Multiple Source Sets', () => {
    const sources = [
      {
        media: "(max-width: 500px)",
        srcset: "https://via.placeholder.com/300x150",
      },
      {
        media: "(min-width: 501px) and (max-width: 800px)",
        srcset: "https://via.placeholder.com/500x250",
      },
      {
        media: "(min-width: 801px)",
        srcset: "https://via.placeholder.com/800x350",
      },
    ];

    return (
      <Picture
        src="https://via.placeholder.com/900x900"
        sources={sources}
      />
    );
  })
