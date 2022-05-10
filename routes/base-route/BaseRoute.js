import { Router } from "express";
import basicController from "../../controller";
import { AuthMiddleware } from '../../middleware/index'
const route = Router();

export const baseRoute = (app) => {
    app.use('/api', route);
    route.get('/',AuthMiddleware,basicController.getData);
    route.post('/user',AuthMiddleware,basicController.getUser);
    route.patch('/update-user',AuthMiddleware,basicController.updateUser);
}