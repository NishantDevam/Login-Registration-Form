"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
class Route {
    constructor(path, router) {
        this.path = path;
        this.router = router;
        if (!path.startsWith("/"))
            throw "invalid path";
        if (Route.routes.includes(path))
            throw "path already exist";
        Route.routes.push(path);
    }
}
Route.routes = [];
exports.Route = Route;
//# sourceMappingURL=routes.types.js.map