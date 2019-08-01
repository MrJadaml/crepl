# CREPL -- Pattern Library Generator

Create React Extensible Pattern Library

CREPL bootstraps a purely structural and functional pattern library, providing a commonly used base set of components.
 It's like a cross between [CRA], [Bootstrap], and [Lodash] -- but for creating naked pattern libraries.

*Slogan* :: "The naked pattern library generator! Styles not included..."


#### Orgin of name

CR kinda like [CRA]
Prodounced Creep-ull, like a combination of Creep and People.
If you think about it, it's kinda like a human with only the skeleton (the HTML), some muscles and tendons (JS for actions and events), and a small brain (minimal UI state).
 But no skin (CSS). Just like creepy zombie people! 🧟‍♂️


## Features

- Should have a CLI for initilization similar to Eslint to allow for custom setups
- Should be able to be used though a package binary like `npx`, similar to [CRA] (Create React App).
- Should include a Docs system like StoryBook
  - Should provide options for docs system on initilization.
- Should work similar to Lodash, allowing users to import just the components they want without having to import the full dependency
- Should allow for people to create plugins that work with the lib.
  - A very useful type of plugin coul be style sets so people can pick and choose how they want their components to look
    - Similar to how you pick your styles for your shell, or between things like bootstrap/material design.


### Resources 📚

- [Storybook] -- open source tool for developing UI components in isolation

[Storybook]: https://storybook.js.org/
[CRA]: https://github.com/facebook/create-react-app
[Bootstrap]: https://getbootstrap.com/
[Lodash]: https://lodash.com/docs/4.17.11
