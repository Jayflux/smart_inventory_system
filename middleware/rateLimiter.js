const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 menit
    max: 10, // maksimal 100 permintaan per window
    message: 'Terlalu banyak permintaan dari IP ini, coba lagi nanti.',
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = limiter;
