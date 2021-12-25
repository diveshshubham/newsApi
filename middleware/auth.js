//middleware to verify the jwt token and retrieve user based on the token payload


const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  const token = req.header("token");  
  
  // verification of token given by request header
  if (!token) return res.status(401).json({ message: "Auth Error" }); 

  try {
    const decoded = jwt.verify(token, "randomString");
    req.user = decoded.user;
     // after sucessfull authentication next() will execute the further code
    next();                   
  } 
  catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};