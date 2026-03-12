// Para error de ruta no encontrada
const notFound = (req, res, next) => {
    const error = new Error(`No se encontró la ruta: ${req.originalUrl}`);
    error.status = 404;
    next(error);
};

// Para cualquier error
const errorHandlerServer = (err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        error: {
            message: err.message || 'Error interno del servidor.',
            stack: process.env.NODE_ENV === 'development'? err.stack : undefined
        }
    });
};

module.exports = {notFound, errorHandlerServer};