
module.exports = function forcePasswordChange(req, res, next) {
  if (req.user && req.user.mustChangePassword) {
    return res.status(403).json({ error: "Devi cambiare la password prima di accedere." });
  }
  next();
};
