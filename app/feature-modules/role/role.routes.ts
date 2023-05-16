import { Router } from "express";
import { Route } from "../../routes/routes.types";
import roleService from "./role.service";

// remove if routes are added
roleService.nothing();

const router = Router();

export default new Route(
    "/role",
    router
)