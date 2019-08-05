import React from 'react';
import Button from './index';
import { render } from '@testing-library/react';
import { getByText } from '@testing-library/dom';

describe('Button', () => {
  it('should render children', () => {
    const { getByText } = render(<Button>Hi Bob</Button>);
    getByText('Hi Bob');
  });
});
