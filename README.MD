# vite-vue2

Now you can use the following Babel features in SFC templates:


```
@babel/plugin-proposal-nullish-coalescing-operator
@babel/plugin-proposal-optional-chaining
@babel/plugin-transform-arrow-functions
@babel/plugin-transform-block-scoping
@babel/plugin-transform-destructuring
@babel/plugin-transform-parameters
@babel/plugin-transform-spread
```

## Usage

- run `yarn add vite-plugin-vue2-enhanced --dev`
- add the plugin into `vite.config.js`
``` js
// vite.config.js
const { createVuePlugin } = require('vite-plugin-vue2')

module.exports = {
  plugins: [createVuePlugin(/*options*/)],
}
```

## [Options](https://github.com/pedro-gilmora/vite-vue2/blob/master/src/index.ts#L26)

### `vueTemplateOptions`

Type: `Object`<br>
Default: `null`

The options for `@vue/component-compiler-utils`.

### `jsx`

Type: `Boolean`<br>
Default: `false`

The options for jsx transform.

### `jsxOptions`

Type: `Object`<br>

The options for `@vue/babel-preset-jsx`.

## Todo

- SSR Build
- Sourcemap