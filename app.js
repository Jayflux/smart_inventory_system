const express = require('express');
const app = express();
require('dotenv').config();

const itemRoutes = require('./routes/itemRoutes');

app.use(express.json());
app.use('/items', itemRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Inventory service running on port ${PORT}`));
