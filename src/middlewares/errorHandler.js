export const errorHandler = (error, req, res, next) => {
  //   console.log(req.data);

  const { status = 500 } = error;
  res.status(status).json({
    status,
    message: 'Something went wrong',
    data: error.message,
  });
};
