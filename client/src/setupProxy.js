const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app => {
	app.use(createProxyMiddleware("/auth/*", { target: "http://localhost:5678" }));
	app.use(createProxyMiddleware("/api/*", { target: "http://localhost:5678" }));
};
