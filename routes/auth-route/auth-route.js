import { Router } from "express";
import authController from "../../controller/auth-controller/index";
import { AssignMiddleware, AuthMiddleware } from '../../middleware/index'
const route = Router();
export const authRoute = (app) => {
    app.use('/api', route);
    route.post('/login', AssignMiddleware, authController.login);
    route.post('/register', AssignMiddleware, authController.register);
    route.get('/get-user', AuthMiddleware, authController.getUser);
}