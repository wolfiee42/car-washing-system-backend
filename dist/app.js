"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const routes_1 = __importDefault(require("./app/routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const notFoundRoute_1 = __importDefault(require("./app/middlewares/notFoundRoute"));
// middleware
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: ['http://localhost:5173'] }));
app.use((0, cookie_parser_1.default)());
app.get('/', (req, res) => {
    res.send('Welcome to my world!');
});
// api endpoints
app.use('/api', routes_1.default);
// error handler
app.use(globalErrorHandler_1.default);
// 404 page
app.use(notFoundRoute_1.default);
exports.default = app;
