// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import { userRouter } from './presentation/routes/useRoutes';

const app = express();
const PORT = process.env.PORT || 3001;

export interface constantsVar {
  prebaVar: string
}

// Middlewares
app.use(bodyParser.json());

// Rutas
app.use([userRouter]); // Monta las rutas específicas aquí

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
} as constantsVar

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
