const errorHandler = (err, req, res, next) => {
  // console.log(err);
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ 
        message: err.errors.map(el => el.message)
       });
      break;
    case "Required":
      res.status(400).json({ message: "Email or Password is required" });
      break;
    case "Invalid":
      res.status(401).json({ message: "Invalid email/password" });
      break;
    case "JsonWebTokenError":
      res.status(401).json({ message: "Invalid token" });
      break;
    case "USER_NOT_FOUND":
      res.status(401).json({ message: "Invalid token" });
      break;
    case "Content_Not_Found":
      res.status(401).json({ message: "Content Not Found" });
      break;
    default:
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
      break;
  }
};

module.exports = errorHandler;
