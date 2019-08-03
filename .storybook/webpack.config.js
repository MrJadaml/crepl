const path = require('path');

const setCssModulesRule = rule => {
  const nextRule = rule;
  const nextOptions = { ...rule.use[1].options, modules: true }

  nextRule.use[1].options = nextOptions;
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
