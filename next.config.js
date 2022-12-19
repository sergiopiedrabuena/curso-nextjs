module.exports = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/urldeseado',
        destination: 'https://otrolink.com',
        permanent: true,
      }
    ]
  }
}