function errorHandler(error, req, res, next) {
  if (error.name === "InvalidPrice") {
    return res.status(400).json({ message: "Price cannot be below 15000" });
  } else if (
    error.name === "SequelizeValidationError" ||
    error.name === "SequelizeUniqueConstraintError" ||
    error.name === "FileRequired" ||
    error.message === "Unexpected end of form" ||
    error.name === "EmptyInput"
  ) {
    return res.status(400).json({ message: "Validation error" });
  } else if (error.name === "InvalidInput") {
    return res
      .status(404)
      .json({ message: error.message || "Invalid input data" });
  } else if (error.name === "NotFound") {
    return res.status(404).json({ message: "Data not found" });
  } else {
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = errorHandler;
