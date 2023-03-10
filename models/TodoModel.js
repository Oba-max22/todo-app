import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

export default mongoose.model('Todo', todoSchema);