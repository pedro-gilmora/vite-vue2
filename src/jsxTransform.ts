import { transform } from '@babel/core'
import fs from 'fs';


// todo hmr
export function transformVueJsx(
  code: string,
  id: string,
  jsxOptions?: Record<string, any>
) {
  const plugins = [],
    babelrcExists = fs.existsSync('./.babelrc');
  
  if (/\.tsx$/.test(id)) {
    plugins.push([
      require.resolve('@babel/plugin-transform-typescript'),
      { isTSX: true, allowExtensions: true },
    ])
  }

  const result = transform(code, {
    presets: [[require.resolve('@vue/babel-preset-jsx'), jsxOptions]],
    sourceFileName: id,
    filename: id,
    sourceMaps: true,
    plugins,
    babelrc: babelrcExists,
    configFile: false
  })!

  return {
    code: result.code as string,
    map: result.map as any,
  }
}
