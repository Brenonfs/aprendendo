const { Router } = require('express');
const tagsRoutes = Router();

const TagsController = require('../controllers/TagsController');

const tagsController = new TagsController();

// function myMiddleware(request, response, next) {
//     console.log('Você passou pelo Middleware');
//     if (!request.body.isAdmin ){
//         return response.json({message: 'usário nao autorizado'});
//     }
//     next();
//}

//userRoutes.post('/',myMiddleware, usersController.create);
tagsRoutes.get('/:user_id', tagsController.index);
module.exports = tagsRoutes;