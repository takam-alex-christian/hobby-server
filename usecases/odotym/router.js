
const express = require("express")



const odotymRouter = express.Router();

const {ToDoItemsModel} = require("./models")

odotymRouter.post("/todo", (req, res)=>{
    

    ToDoItemsModel.create({
        value: req.body.value? req.body.value: ""
    }).then((doc)=>{
        res.json({completed: true, doc: doc})
    });
})

module.exports = odotymRouter;