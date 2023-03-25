const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'eslint-config-prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    camelcase: RULES.OFF,
    'react/display-name': RULES.OFF,
    'spaced-comment': RULES.OFF,
    'array-callback-return': RULES.OFF,
    'no-unreachable': RULES.OFF,
  },
}
