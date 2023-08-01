const { Router } = require('express');
const notesRoutes = Router();

const NotesController = require('../controllers/NotesController');
const notesController = new NotesController();

// function myMiddleware(request, response, next) {
//     console.log('Você passou pelo Middleware');
//     if (!request.body.isAdmin ){
//         return response.json({message: 'usário nao autorizado'});
//     }
//     next();
//}

//userRoutes.post('/',myMiddleware, usersController.create);
notesRoutes.get('/', notesController.index);
notesRoutes.post('/:user_id', notesController.create);
notesRoutes.get('/:id', notesController.show);
notesRoutes.delete('/:id', notesController.delete);
module.exports = notesRoutes;