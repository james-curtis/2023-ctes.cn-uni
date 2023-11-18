// @ts-check

/**
 * @type {import('@types/lint-staged').Config}
 */
module.exports = {
  '*.{js,jsx,ts,tsx,json}': ['eslint', 'prettier -c'],
}
