const { Router } = require('express');
const userRoutes = Router();

const UsersController = require('../controllers/UsersController');
const usersController = new UsersController();

// function myMiddleware(request, response, next) {
//     console.log('Você passou pelo Middleware');
//     if (!request.body.isAdmin ){
//         return response.json({message: 'usário nao autorizado'});
//     }
//     next();
//}

//userRoutes.post('/',myMiddleware, usersController.create);
userRoutes.post('/', usersController.create);
userRoutes.put('/:id', usersController.update);
module.exports = userRoutes;