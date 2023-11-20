"use strict";

var _httpProxyMiddleware = require("http-proxy-middleware");
module.exports = function (app) {
  app.use("/", (0, _httpProxyMiddleware.createProxyMiddleware)({
    target: "https://api-gw.sports.naver.com/schedule/games/20231001WOKT02023",
    changeOrigin: true
  }));
};