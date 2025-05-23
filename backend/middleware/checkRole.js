
module.exports = function checkRole(requiredRole) {
  return (req, res, next) => {
    if (!req.user || (req.user.ruolo !== requiredRole && req.user.ruolo !== 'admin')) {
      return res.status(403).json({ error: "Accesso negato" });
    }
    next();
  };
};
