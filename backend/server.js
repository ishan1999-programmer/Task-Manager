import express from "express";
import { v4 as uuidv4 } from "uuid";
const app = express();

app.use("/api/tasks", express.json());

app.post("/api/tasks", (req, res) => {
  const { title } = req.body;
  const id = uuidv4();
  if (title) {
    data.push({ id, title, isCompleted: false });
    res.status(201).json(data);
  } else {
    res
      .status(400)
      .json({ message: "Task title must contain atleast one character" });
  }
});

app.put("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, isCompleted } = req.body;
  if (data.some((task) => task.id === id)) {
    data.forEach((task) => {
      if (task.id === id) {
        task.title = title;
        task.isCompleted = isCompleted;
      }
    });
    res.status(200).json(data);
  }
  else{
    res.status(404).json({message: "Task doesn't exists"});
  }
});

app.delete("/api/tasks/:id" , (req,res)=>{
    const {id} = req.params;
    if(data.some((task) => task.id === id)){
        const newData = data.filter((task)=>task.id!=id);
        data = newData
        res.status(200).json(data);
    }
    else{
        res.status(400).json({message: "Task doesn't exists" });
    }
})

app.listen(5000, () => {
  console.log("sever listening at port 5000");
});

let data = [];
