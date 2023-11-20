import {createProxyMiddleware} from "http-proxy-middleware";

module.exports = function(app){
    app.use(
        "/",
        createProxyMiddleware({
            target: "https://api-gw.sports.naver.com/schedule/games/20231001WOKT02023",
            changeOrigin: true,
        })
    );
}