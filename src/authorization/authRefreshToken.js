const jwt = require("jsonwebtoken");

const verifyRefreshToken = async (req, res, next) => {
  const { refreshToken } = req.body;
  if (!refreshToken || refreshToken === undefined) {
    return res.json("Você não está autorizado");
  }
  try {
    jwt.verify(refreshToken, process.env.KEY_SECRET_REFRESHTOKEN);
    next();
  } catch (error) {
    return res.json("Token Invalid");
  }
};

module.exports = verifyRefreshToken;
