const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./routers/user.route");
const ToDoRoute = require('./routers/todo.route');
const app = express();

app.use(bodyParser.json())

app.use("/",UserRoute);
app.use("/",ToDoRoute);

module.exports = app;