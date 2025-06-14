const express = require('express');
const app = express();
const passport = require('passport');
require('dotenv').config();
require('./config/passport');

const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');

app.use(express.json());
app.use(passport.initialize());

app.use('/auth', authRoutes); 
app.use('/items', itemRoutes); 

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
