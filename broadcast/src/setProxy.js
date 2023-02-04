import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    "/test",
    createProxyMiddleware({
      target: "https://heesootory.store",
      changeOrigin: true,
    }),
  );
}
