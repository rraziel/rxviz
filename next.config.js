module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/examples/basic-interval',
        permanent: false
      }
    ];
  }
};
