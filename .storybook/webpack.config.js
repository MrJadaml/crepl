const setCssModulesRule = rule => {
  const nextRule = rule;
  const cssLoader = rule.use[1];
  const nextOptions = { ...cssLoader.options, modules: true }

  cssLoader.options = nextOptions;
  return nextRule;
}

module.exports = async ({ config, mode }) => {
  const rules = config.module.rules.map(rule => {
    const isCssRule = rule.test.toString().indexOf('css') !== -1;
    let nextRule = rule;

    if (isCssRule) {
      nextRule = setCssModulesRule(rule);
    }

    return nextRule;
  });

  config.module.rules = rules;

  return config;
};
