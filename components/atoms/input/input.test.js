import React from 'react';
import { Input } from './index';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

describe('Input', () => {
  it('should render an input', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should accept types', () => {
    const { asFragment } = render(<Input type="checkbox" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
