const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  (req, res) => {
    // Tampilkan pesan setelah berhasil login
    res.send(`
      <html>
        <head><title>Berhasil Login</title></head>
        <body style="font-family: sans-serif; text-align: center; margin-top: 100px;">
          <h1>Ini merupakan website-nya!</h1>
          <p>Login Google berhasil 🎉</p>
        </body>
      </html>
    `);
  }
);

module.exports = router;
