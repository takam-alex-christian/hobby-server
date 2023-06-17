
const express = require("express")



const odotymRouter = express.Router();

const {ToDoItemsModel} = require("./models")

odotymRouter.post("/todo", async (req, res)=>{
    
    let sampleTodo = {value: "some todo"}
    
    console.log(req.body)

    await ToDoItemsModel.create({
        value: sampleTodo.value
    }).then((doc)=>{
        console.log("new doc added")
    });

    res.json({completed: true})
})

module.exports = odotymRouter;