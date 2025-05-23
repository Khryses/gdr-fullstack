
exports.getAdminDashboard = (req, res) => {
  res.json({
    message: "Benvenuto nel pannello di amministrazione",
    sezioni: ["mercato", "mappe", "bacheche"]
  });
};
