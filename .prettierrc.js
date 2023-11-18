// @ts-check

/** @type {import("prettier").Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
}
