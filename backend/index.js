const express = require("express");
const http = require("http");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

const DBConnection = require("./db/db");

const app = express();

DBConnection();

app.use(express.json());
app.use(cors());

//router
readdirSync("./routers").map((route) =>
  app.use("/api/v1",require("./routers/" + route))
);

const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server conected at port ${port}`);
});
