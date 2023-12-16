module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['react-refresh'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    'react/button-has-type': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/prefer-default-export': 'off',
    'indent':[
      'error',
      2,
      { 'SwitchCase': 1 }
    ],
    'quotes':[
      'error',
      'single'
    ],
    'max-len':[
      'error',
      140,
      2,
      {
        'ignoreComments':true,
        'ignoreUrls':true
      }
    ],
    'object-curly-spacing':[
      2,
      'always'
    ],
  },
}
