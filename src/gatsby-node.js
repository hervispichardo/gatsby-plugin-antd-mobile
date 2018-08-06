exports.modifyBabelrc = ( {babelrc}, {style} ) => {
  return {
    ...babelrc,
    plugins: babelrc.plugins.concat([
      ['import', {
        libraryName: 'antd-mobile',
        style: (style) ? style : 'css'
      }]
    ])
  }
}