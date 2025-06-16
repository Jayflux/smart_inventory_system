// delivery-service/app.js
require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');

const deliveryRoutes = require('./routes/deliveryRoutes');

app.use(express.json());
app.use('/deliveries', deliveryRoutes);   // ⬅️ hanya urus pengiriman

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Delivery Service running on ${PORT}`));
