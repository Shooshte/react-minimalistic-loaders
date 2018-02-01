module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactMinimalisticLoader',
      externals: {
        react: 'React'
      }
    }
  }
}
