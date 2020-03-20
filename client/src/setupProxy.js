const { createProxyMiddleware } = require('http-proxy-middleware');

let target = "http://localhost:5678";

// if (process.env.NODE_ENV === "production")
//     target = "https://email-2020.herokuapp.com";
// else
//     target = "http://localhost:5678";

module.exports = app => {
    app.use(createProxyMiddleware('/auth/*', { target }));
};