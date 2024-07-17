var jwt = require("jsonwebtoken");
const JWT_SECRET = "Aayushlpu$122";
const fetchuser = (req, res, next) => {
  //get the user from jwt token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    // res.status(401).send({ error: "Please authenticate using a valid token" });
    // res.json({error:message})
    console.log(error.message);
  }
};

module.exports = fetchuser;
