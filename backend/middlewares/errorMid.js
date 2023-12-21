const errorMiddleware = (err, req, res, next) => {
  console.log('here is an error middleware');
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  console.log(process.env.NODE_ENV)
  res.json({ message: err.message, stack: process.env.NODE_ENV === "development" ? err.stack : null });
}

export default errorMiddleware




// const errorMiddleware = (error, req, res, next)=>{
//   console.log('From middleware🐍🐍🐍')
//   res.json({message: error.message, stack: process.env.NODE_ENV === "development"? error.stack : null})
// }

// module.exports = errorMiddleware