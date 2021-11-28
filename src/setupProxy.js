const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `https://${process.env.REACT_APP_SUBDOMIAN}.zendesk.com`,
      changeOrigin: true,
    })
  );
};