const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

//For every new database we make
const tasks = require("./routes/tasks");
const data = require("./routes/data");
app.use("/api/v1/tasks", tasks);
app.use("/api/v1/data", data);

const port = 3006;
//MONGO DB CONNECT
const connectDB = require("./db/connect");
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log("Server is listening on port" + port));
  } catch (err) {
    console.log(err);
  }
};
start();
