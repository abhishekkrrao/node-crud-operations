import { Router } from "express";
import { baseRoute } from './base-route/BaseRoute'
import { authRoute } from "./auth-route/auth-route"

export default () => {
    const app = new Router();
    baseRoute(app);
    authRoute(app);
    return app;
}
