// @ts-check

/**
 * @type {import('@types/lint-staged').Config}
 */
module.exports = {
  '{**/*,*}.{js,ts,jsx,tsx,vue,html,astro}': ['eslint', 'prettier -c'],
}
