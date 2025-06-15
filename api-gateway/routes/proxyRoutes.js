const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const router = express.Router();

// Inventory Service
router.use('/items', createProxyMiddleware({
    target: process.env.INVENTORY_SERVICE_URL, // http://localhost:3001
    changeOrigin: true,
    pathRewrite: { '^/items': '' }
}));

// Auth Service
router.use('/auth', createProxyMiddleware({
    target: process.env.AUTH_SERVICE_URL, // http://localhost:3002
    changeOrigin: true,
    pathRewrite: { '^/auth': '' }
}));

// Delivery Service
router.use('/deliveries', createProxyMiddleware({
    target: process.env.DELIVERY_SERVICE_URL, // http://localhost:3003
    changeOrigin: true,
    pathRewrite: { '^/deliveries': '' }
}));


module.exports = router;
