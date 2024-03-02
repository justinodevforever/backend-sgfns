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

const authorization = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization === undefined) {
    return res.status(401).json("Você não está autorizado");
  }
  const [, token] = authorization.split(" ");
  try {
    jwt.verify(token, process.env.KEY_SECRET);
    next();
  } catch (error) {
    return res.status(201).json("Token Invalid");
  }
};
module.exports = { authorization, verifyRefreshToken };
