const path = require('path');
require('dotenv').config();

const db = require(path.join(__dirname, '..', 'database', 'db.js'));
module.exports = db;