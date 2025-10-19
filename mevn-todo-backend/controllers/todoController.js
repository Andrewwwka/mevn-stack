const Todo = require('../models/Todo');

const getTodos = async (req,res) => {
    try {
        const todos = await Todo.find().sort({ createdAt: -1 });
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}

const createTodo = async (req, res) => {
    if (!req.body.text) {
        return res.status(400).json({ message: 'Text field is required' });
    }

    try {
        const newTodo = await Todo.create({
            text: req.body.text,
        });
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

const updateTodo = async (req, res) => {
    try{
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

    } catch (error) {

        res.status(500).json({ message: 'Server Error', error });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }  
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};