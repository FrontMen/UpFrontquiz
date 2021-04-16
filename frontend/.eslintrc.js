var isProd = process.env.LINT_PROD.toLowerCase() === 'true';

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  plugins: ['simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'prefer-rest-params': 'off',
    'no-sparse-arrays': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    ...(!isProd
      ? {
          'react/display-name': 'off',
          'simple-import-sort/sort': 'error',
          '@typescript-eslint/explicit-function-return-type': 'off',
          '@typescript-eslint/explicit-module-boundary-types': 'off',
          '@typescript-eslint/no-unused-vars': 'off',
          '@typescript-eslint/no-explicit-any': 'off',
          'no-console': 'off',
        }
      : {}),
    // 'jsx-a11y/anchor-is-valid': [
    //   'off',
    //   {
    //     components: ['Link'],
    //     specialLink: ['hrefLeft', 'hrefRight'],
    //     aspects: ['invalidHref', 'preferButton'],
    //   },
    // ],
  },
};
