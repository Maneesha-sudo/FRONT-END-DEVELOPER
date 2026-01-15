const validateTodoMiddleware = (req, res, next) => {
  const { title, ...rest } = req.body;

  if (!title || Object.keys(rest).length > 0) {
    return res.status(400).json({
      error: "Invalid request body. Only 'title' is allowed"
    });
  }

  next();
};

module.exports = validateTodoMiddleware;
