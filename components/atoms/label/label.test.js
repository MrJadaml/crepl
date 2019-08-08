import React from 'react';
import Label from './index';
import { cleanup, render } from '@testing-library/react';
import { getByText } from '@testing-library/dom';

afterEach(cleanup);

describe('Label', () => {
  it('should render a label', () => {
    const { asFragment } = render(
      <Label htmlFor="foo">
        Foo label
      </Label>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children', () => {
    const { getByText } = render(
      <Label htmlFor="bar">
        Bar label
      </Label>
    );

    getByText('Bar label');
  });
});
