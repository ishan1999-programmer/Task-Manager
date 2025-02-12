import express from "express";
import cors from "cors";
import taskRoutes from "./routes/tasks.js";

const app = express();

app.use("/api/tasks", express.json());
app.use(cors());
app.use("/api/tasks", taskRoutes);

app.listen(5000, () => {
  console.log("sever listening at port 5000");
});
