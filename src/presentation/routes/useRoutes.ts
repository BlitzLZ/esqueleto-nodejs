// src/routes/userRoutes.ts
import express from 'express';
import { getUser, createUser } from '../controllers/useController';

export const userRouter = express.Router();

// Definición de rutas
userRouter.get('/:id', getUser);
userRouter.post('/', createUser);
