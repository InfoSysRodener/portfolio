module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:tailwindcss/recommended', 'plugin:react/recommended', 'eslint:recommended', 'next/core-web-vitals', 'prettier'],
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
  plugins: ['react'],
  rules: {
    // 'max-len': [2, 250],
    'tailwindcss/classnames-order': 'off',
  },
}
