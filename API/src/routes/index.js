const { Router } = require('express');

const usersRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");
// const transactionRoutes = require("./transaction.routes");
// router.use("/transaction", transactionRoutes);
const routes = Router(); // isso eu n entendi?

routes.use("/users",usersRouter);
routes.use("/notes",notesRouter);
routes.use("/tags",tagsRouter);

module.exports = routes;


