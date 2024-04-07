const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;

  // switch (statusCode) {
  //   case 400:
  //     break;
  //   default:
  //     break;
  // }

  res.json({
    statusCode,
    message: err.message,
    stack: err.stack,
  });
};

module.exports = errorHandler;
