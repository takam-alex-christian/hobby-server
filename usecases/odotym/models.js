


const mongoose = require("mongoose")

//self explanatory code
const ToDoItemSchema = new mongoose.Schema({
    value: {
        type: String,
        required: "ToDo value is required"
    },
    completed: {
        type: Boolean,
        default: false
    },
    creationDate: {
        type: Date,
        default: () =>  {return Date.now()}
    },
    lastModified: {
        type: Date,
        default: () =>  {return Date.now()}
    },
    important: {
        type: Boolean,
        default: false
    },
    parentFolder: {
        type: String,
        default: new String("")
    }
})

const ToDoItemsModel = mongoose.model("Todo", ToDoItemSchema);

module.exports = {ToDoItemsModel}