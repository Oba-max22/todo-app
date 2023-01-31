import express from 'express';
import { createTodo, getTodoById, getTodos, updateTodo, deleteTodo } from '../controllers/TodoController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to Todo-App!');
});

router.get('/todos', getTodos);

router.get('/todos/:id', getTodoById);

router.post('/todos', createTodo);

router.put('/todos/:id', updateTodo);

router.delete('/todos/:id', deleteTodo);

export default router;