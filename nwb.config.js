module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Loader',
      externals: {
        react: 'React'
      }
    }
  }
}
