const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 menit
    max: 5, 
    message: 'Terlalu banyak permintaan dari IP ini, coba lagi nanti.',
});

module.exports = limiter;
