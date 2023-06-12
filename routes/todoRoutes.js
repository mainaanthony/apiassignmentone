const express = require('express');
//importing named exports
const { getAllTodos, home, postATodo, deleteTodoById, getTodoById,updateTodoById} = require('../controllers/todoController')

const router = express.Router();

// defining routes for the api
router.get('/', home)

router.get('/todos', getAllTodos)

router.post('/todos', postATodo)


router.get('/todos/:id', getTodoById);
router.put('/todos/:id', updateTodoById);
router.delete('/todos/:id', deleteTodoById)

//exporting data
module.exports = {
    router
}