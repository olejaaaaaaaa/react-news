import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://api.currentsapi.services",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
  })
);

const port = 5173;
app.listen(port, () => {
  console.log(`Прокси-сервер слушает на порту ${port}`);
});
