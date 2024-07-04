"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
// src/routes/userRoutes.ts
const express_1 = __importDefault(require("express"));
const useController_1 = require("../controllers/useController");
exports.userRouter = express_1.default.Router();
// Definición de rutas
exports.userRouter.get('/:id', useController_1.getUser);
exports.userRouter.post('/', useController_1.createUser);
