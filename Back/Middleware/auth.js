const jwt = require("jsonwebtoken");



module.exports = function(req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) res.status(401).json({ msg: "No token, authorisation denied" });

  try {
    let decoded = jwt.verify(token, "secret-token"); 
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not vaid" });
  }
};
