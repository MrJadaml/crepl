// Move this into a "/storybook" dir at the root of the app
// Leave as dot-file for now, to see if plugins require it here

import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
