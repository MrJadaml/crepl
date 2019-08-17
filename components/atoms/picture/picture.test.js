import React from 'react';
import { Picture } from './index';
import { cleanup, render } from '@testing-library/react';
import { getByText } from '@testing-library/dom';

afterEach(cleanup);

describe('Picture', () => {
  it('should render an anchor tag', () => {
    const { asFragment } = render(
      <Picture
        media="(min-width: 800px)"
        src="/media/examples/painted-hand-298-332.jpg"
        srcset="/media/examples/surfer-240-200.jpg"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
