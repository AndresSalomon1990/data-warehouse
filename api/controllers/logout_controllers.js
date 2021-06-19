module.exports.logout_get = (req, res) => {
  // to logout, it replace the jwt value in the token and an expire time of 1ms so the cookie expires quickly
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/login');
};