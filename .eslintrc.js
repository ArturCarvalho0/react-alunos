module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb-base', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': 0,
    'no-unused-vars': 0,
    'react/prop-types': 0,
    'default-param-last': 0,
    'func-names': 0,
    'require-yield': 0,
  },
};
