require('dotenv').config();
const express = require('express');
const limiter = require('./middleware/rateLimiter'); // pastikan path ini benar
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(express.json());

app.use('/items', limiter);

app.use('/items', createProxyMiddleware({
  target: process.env.INVENTORY_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: { '^/items': '/items' }
}));

app.listen(process.env.PORT, () => {
  console.log(`API Gateway running on port ${process.env.PORT}`);
});
