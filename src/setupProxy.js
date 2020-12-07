const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};
/*
https://blogg.kantega.no/webapp-with-create-react-app-and-spring-boot/
JAx RS
AXIOS
Proxy to bachend in test and production environment
*/