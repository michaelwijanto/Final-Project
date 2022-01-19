const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message });
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
    default:
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
      break;
  }
};

module.exports = errorHandler;
