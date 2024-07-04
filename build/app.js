"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const useRoutes_1 = require("./presentation/routes/useRoutes");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// Middlewares
app.use(body_parser_1.default.json());
// Rutas
app.use([useRoutes_1.userRouter]); // Monta las rutas específicas aquí
/*
  const mailProvider = new MailjetAdapter(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
  )// instance the mailProvider
*/
//Si necesitas instanciar algo
app.locals.constants = {
    prebaVar: "prebaVar"
    //mailProvider: mailProvider
};
// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
