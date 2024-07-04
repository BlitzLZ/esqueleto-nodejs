// src/controllers/userController.ts
import { Request, Response } from 'express';
import { constantsVar } from '../../app';

export const getUser = (req: Request, res: Response) => {
  const userId = req.params.id;

  // Destructuración de variables constant
  const { prebaVar } = req.app
      .locals.constants as constantsVar

  // Llamamos a useCase
  // const sendMailUsecase = new SendMail(mailProvider);

  // Lógica para obtener usuario con el ID userId
  res.json({ message: `GET user with ID ${userId}, and var is: ${prebaVar}` });
};

export const createUser = (req: Request, res: Response) => {
  const userData = req.body;
  // Lógica para crear un nuevo usuario con los datos userData
  res.json({ message: 'POST user', user: userData });
};
