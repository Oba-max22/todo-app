import TodoModel from "../models/TodoModel.js";


export const getTodos = async (req, res) => {
    await TodoModel.find().then(data => {
        if (data) {
            return res.status(200).send({ data: data })
        }
    }).catch(error => {
        return res.status(500).send({ error: error.message })
    });
}

export const getTodoById = async (req, res) => {
    if (req.params && req.params.id) {
        await TodoModel.findById(req.params.id).then(data => {
            if (data) {
                return res.status(200).send({ data: data })
            }
        }).catch(error => {
            return res.status(500).send({ error: error.message })
        });
    } else {
        return res.status(400).send({ error: "Id is required!" })
    }
}

export const createTodo = (req, res) => {
    if (req.body) {
        const todo = new TodoModel(req.body);
        todo.save()
            .then(data => {
                res.status(200).send({ data: data })
            })
            .catch(error => {
                res.status(500).send({ error: error.message })
            })
    } else {
        return res.status(400).send({ error: "Todo is required!" })
    }
}

export const updateTodo = async (req, res) => {
    const _id = req.params.id;
    const requestBody = req.body;

    if (!_id) {
        return res.status(400).send({ error: "Id is required!" });
    }

    if (!requestBody) {
        return res.status(400).send({ error: "Todo is required!" });
    }

    await TodoModel.findByIdAndUpdate(_id, requestBody).then(data => {
            if (!data) {
                return res.status(404).send({ error: "Todo not found!" });
            } else {
                return res.status(200).send({ message: `Todo with id : ${data._id} was updated successfully` });
            }
        }).catch(error => { 
            return res.status(500).send({ error: error.message });
        });
}

export const deleteTodo = async (req, res) => {
    const _id = req.params.id;

    if (!_id) {
        return res.status(400).send({ error: "Id is required!" });
    }

    await TodoModel.findByIdAndDelete(_id).then(data => {
        if (!data) {
            return res.status(404).send({ error: "Todo not found!" });
        } else {
            return res.status(200).send({ message: `Todo with id : ${data._id} was deleted successfully`});
        }
    }).catch(error => {
        return res.status(500).send({ error: error.message });
    });
}