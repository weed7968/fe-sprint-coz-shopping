const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://cozshopping.codestates-seb.link",
      changeOrigin: true,
    })
  );
};
