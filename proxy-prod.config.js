const proxy = [{
  context: '/api',
  target: 'https://stock-projection-service.herokuapp.com',
  changeOrigin: true,
  pathRewrite: {'^/api' : ''}
}];

module.exports = proxy;
