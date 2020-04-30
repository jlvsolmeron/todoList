const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    info: {
        type: String,
        required: true        
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model('Todo', TodoSchema); 

