
const express = require("express")



const odotymRouter = express.Router();

const { ToDoItemsModel } = require("./models")

odotymRouter.get("/todo", async (req, res)=>{
    //number for the number limit
    //start for the starting point

    
    await ToDoItemsModel.find({}).skip(req.query.start).limit(req.query.number).then((docs)=>{
        console.log(docs)
        return res.json(docs)
    })

    
})

odotymRouter.post("/todo", (req, res) => {


    ToDoItemsModel.create({
        value: req.body.value ? req.body.value : ""
    }).then((doc) => {
        return res.json({ completed: true, doc: doc })
    });

    
    
})

odotymRouter.patch("/todo",(req, res)=>{

    const dataToUpdate = {...req.body};
    delete dataToUpdate["_id"];

    ToDoItemsModel.findByIdAndUpdate(req.body._id, dataToUpdate, {new: true}).then((doc, err)=>{
        if (err) throw new Error(err)
        else return res.json({message: "backend patch response", doc: doc})
    })

})



module.exports = odotymRouter;