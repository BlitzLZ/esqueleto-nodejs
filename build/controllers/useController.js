"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUser = void 0;
const getUser = (req, res) => {
    const userId = req.params.id;
    // Lógica para obtener usuario con el ID userId
    res.json({ message: `GET user with ID ${userId}` });
};
exports.getUser = getUser;
const createUser = (req, res) => {
    const userData = req.body;
    // Lógica para crear un nuevo usuario con los datos userData
    res.json({ message: 'POST user', user: userData });
};
exports.createUser = createUser;
