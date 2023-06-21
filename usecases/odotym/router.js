
const express = require("express")



const odotymRouter = express.Router();

const { ToDoItemsModel } = require("./models")

odotymRouter.get("/todo", async (req, res)=>{
    //n for the number limit
    //s for the starting point

    
    await ToDoItemsModel.find({}).skip(req.query.start).limit(req.query.number).then((docs)=>{
        console.log(docs)
        res.json(docs)
    })

    
})

odotymRouter.post("/todo", (req, res) => {


    ToDoItemsModel.create({
        value: req.body.value ? req.body.value : ""
    }).then((doc) => {
        res.json({ completed: true, doc: doc })
    });
})



module.exports = odotymRouter;