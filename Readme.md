# Appfolio base ESLint config

## ** This is config is now deprecated, please use https://github.com/appfolio/front-end-libs/tree/main/packages/eslint-config-appfolio ([package](https://github.com/appfolio/front-end-libs/pkgs/npm/eslint-config-appfolio)) **

This package provides Appfolio's base JavaScript for ES6/2015 as an extensible shared config.

This is based on [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base),
with a few adjustments to warnings to minimize noise, and to encourage useful comments.

**Note**: _Basic JSX support is enabled in this config, but `@appfolio/eslint-config-appfolio-react` enables
full React support._

## Usage

1. `npm install --save-dev @appfolio/eslint-config-appfolio-base`
2. add 
   `"extends": "@appfolio/eslint-config-appfolio-base"`
    to your .eslintrc.json
