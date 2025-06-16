// inventory-service/app.js
require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');

// route khusus inventory
const itemRoutes = require('./routes/itemRoutes');

app.use(express.json());
app.use('/items', itemRoutes);        // ⬅️ hanya urus item

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Inventory Service running on ${PORT}`));
