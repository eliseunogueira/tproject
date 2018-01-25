module.exports = {
  extends: 'airbnb-base',
  rules: {
    semi: 0,
    'arrow-body-style': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  env: {
    jest: true,
  },
  globals: {
    fetch: false,
  },
};
