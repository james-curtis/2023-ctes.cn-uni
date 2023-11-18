// @ts-check

/**
 * @type {import('@types/lint-staged').Config}
 */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint', 'prettier -c'],
};
