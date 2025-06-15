// auth-service/app.js
require('dotenv').config();
const express = require('express');
const passport = require('passport');
const app = express();

// konfigurasi strategi Passport (JWT + Google)
require('./config/passport');

const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use(passport.initialize());
app.use('/auth', authRoutes);         // ⬅️ hanya urus autentikasi

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Auth Service running on ${PORT}`));
