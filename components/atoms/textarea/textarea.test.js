import React from 'react';
import { Textarea } from './index';
import { cleanup, render } from '@testing-library/react';
import { getByText } from '@testing-library/dom';

afterEach(cleanup);

describe('Textarea', () => {
  it('should render a textarea element', () => {
    const { asFragment } = render(
      <Textarea value="Bob has a lot to say"></Textarea>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children', () => {
    const { getByText } = render(
      <Textarea value="Carl has a lot to say"></Textarea>
    );

    getByText('Carl has a lot to say');
  });
});
