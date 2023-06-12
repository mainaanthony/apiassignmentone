
const todoTasks = require('../data');

module.exports = {
  // ...existing code...



   //exporting and defining route handlers/ controllers

    home: (req, res)=>{
        //sending response with text format
        res.send('Welcome to todo list')
    },

    getAllTodos: (req, res)=>{
        //sending response with json format
        res.json({
            success: true,
            message: "fetched todos successfully",
            results: todoTasks
        })
    },

    postATodo: (req, res)=>{
        todoTasks.push(req.body);
        //sending response with json format and setting status codes
        res.status(201).json({
            success: true,
            message: "added the todo successfully",
            results: req.body
        })
    },

  getTodoById: (req, res) => {
    const { id } = req.params;
    const todo = todoTasks.find((task) => task.id === Number(id));

    if (todo) {
      res.status(200).json({
        success: true,
        message: 'Todo fetched successfully',
        result: todo,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Todo not found',
      });
    }
  },

  updateTodoById: (req, res) => {
    const { id } = req.params;
    const { task, priority, dueDate } = req.body;
    const index = todoTasks.findIndex((task) => task.id === Number(id));

    if (index !== -1) {
      todoTasks[index] = {
        ...todoTasks[index],
        task,
        priority,
        dueDate,
      };
      res.status(200).json({
        success: true,
        message: 'Todo updated successfully',
        result: todoTasks[index],
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Todo not found',
      });
    }
  },

  deleteTodoById: (req, res) => {
    const { id } = req.params;
    const index = todoTasks.findIndex((task) => task.id === Number(id));

    if (index !== -1) {
      const deletedTodo = todoTasks.splice(index, 1);
      res.status(200).json({
        success: true,
        message: 'Todo deleted successfully',
        result: deletedTodo,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Todo not found',
      });
    }
  },
};

// const todoTasks = require('../data')

// //exporting and defining route handlers/ controllers
// module.exports = {
//     home: (req, res)=>{
//         //sending response with text format
//         res.send('Welcome to todo list')
//     },

//     getAllTodos: (req, res)=>{
//         //sending response with json format
//         res.json({
//             success: true,
//             message: "fetched todos successfully",
//             results: todoTasks
//         })
//     },

//     postATodo: (req, res)=>{
//         todoTasks.push(req.body);
//         //sending response with json format and setting status codes
//         res.status(201).json({
//             success: true,
//             message: "added the todo successfully",
//             results: req.body
//         })
//     },


//     deleteATodo: (req, res)=>{
//         todoTasks.pop(req.body);
//         //sending response with json format and setting status codes
//         res.status(201).json({
//             success: true,
//             message: "Deleted the todo successfully",
//             results: req.body
//         })
//     }

// }
