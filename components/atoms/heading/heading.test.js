import React from 'react';
import { Heading } from './index';
import { cleanup, render } from '@testing-library/react';
import { getByText } from '@testing-library/dom';

afterEach(cleanup);

describe('Heading', () => {
  it('should render an h1 heading by default', () => {
    const { asFragment } = render(<Heading>Hi Bob</Heading>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render a dynamic heading', () => {
    const { asFragment } = render(<Heading type="h2">Hi Carl</Heading>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children', () => {
    const { getByText } = render(<Heading type="h6">Hi Foo</Heading>);
    getByText('Hi Foo');
  });
});
