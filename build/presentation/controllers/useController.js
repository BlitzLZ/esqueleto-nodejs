"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUser = void 0;
const getUser = (req, res) => {
    const userId = req.params.id;
    // Destructuración de variables constant
    const { prebaVar } = req.app
        .locals.constants;
    // Llamamos a useCase
    // const sendMailUsecase = new SendMail(mailProvider);
    // Lógica para obtener usuario con el ID userId
    res.json({ message: `GET user with ID ${userId}, and var is: ${prebaVar}` });
};
exports.getUser = getUser;
const createUser = (req, res) => {
    const userData = req.body;
    // Lógica para crear un nuevo usuario con los datos userData
    res.json({ message: 'POST user', user: userData });
};
exports.createUser = createUser;
