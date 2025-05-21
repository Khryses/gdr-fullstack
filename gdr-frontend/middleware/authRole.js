// Da inserire nei controller Express
function requireRole(role) {
  return (req, res, next) => {
    if (req.user?.role !== role) {
      return res.status(403).json({ message: 'Accesso negato' });
    }
    next();
  };
}

module.exports = { requireRole };