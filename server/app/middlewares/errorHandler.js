const errorHandler = (err, req, res, next) => {
  console.log({err});
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ error: err.errors.map((el) => el.message) });
      break;
    case "Email not valid":
      res.status(400).json({ error: "Email not valid"});
      break;
    case "Required":
      res.status(400).json({ error: "Email or Password is required" });
      break;
    case "Invalid":
      res.status(401).json({ error: "Invalid email/password" });
      break;
    case "JsonWebTokenError":
      res.status(401).json({ error: "Invalid token" });
      break;
    case "USER_NOT_FOUND":
      res.status(401).json({ error: "Invalid token" });
      break;
    case "Content_Not_Found":
      res.status(401).json({ error: "Content Not Found" });
      break;
    case "Bad_Request":
      res.status(400).json({ error: "Please fill all the blank!" });
      break;
    default:
      res.status(500).json({ error: "Internal server error" });
      break;
  }
};

module.exports = errorHandler;
