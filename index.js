//index.js
const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

const ControllerProject = require("./controllers/ControllerProject.js");

app.use("/", ControllerProject);

app.listen(port, () => {
  console.log("Servidor Rodando!");
});