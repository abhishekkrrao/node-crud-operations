import jwt from "jsonwebtoken";
export const AuthMiddleware = async (req, res, next) => {
    var token = jwt.sign({ email: '%gdaYug**033hHU' }, 'joolkart');
    req.token = token;
    return next();
};
export const AssignMiddleware = async (req, res, next) => {
    var token = jwt.sign({ email: '%gdaYug**033hHU' }, 'joolkart');
    req.token = token;
    return next();
};

