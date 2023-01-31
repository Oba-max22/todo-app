import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['todo', 'in-progress', 'done']
    },
    dueDate: {
        type: Date,
        required: true
    }
});

export default mongoose.model('Todo', todoSchema);