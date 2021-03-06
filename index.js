require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./configs/db.config")();

const app = express();

app.use(express.json());
app.use(cors({origin: process.env.REACT_APP_URL}));

const uploadImgRouter = require("./routes/uploading.routes");
app.use("/", uploadImgRouter);

const userRouter = require("./routes/user.routes");
app.use("/user", userRouter);

const projectsRouter = require("./routes/projects.routes");
app.use("/projects", projectsRouter);

app.listen(Number(process.env.PORT), () => {
    console.log("Server Conectado dibas! PORT:", process.env.PORT);
})