import React from 'react';
import Link from './index';
import { cleanup, render } from '@testing-library/react';
import { getByText } from '@testing-library/dom';

afterEach(cleanup);

describe('Link', () => {
  it('should render an anchor tag', () => {
    const { asFragment } = render(
      <Link href="#foo">
        Foo link
      </Link>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children', () => {
    const { getByRole } = render(
      <Link href="#bar">
        Bar link
      </Link>
    );

    const link = getByRole('link');

    expect(link.textContent).toBe('Bar link');
  });
});
