const express = require("express");
const server = express();
server.listen(8080);

const database = require("./config/database.config");
//predefined middlware
const bodyParser = require("./middlware/bodyParser.middleware");
const multer = require("./middlware/multer.middlware");

server.use(bodyParser.urlEncoded);
server.use(bodyParser.urlJson);
server.use(multer);

// routes
// const loginRoutes = require("./routes/login.routes");
// const notesRoutes = require("./routes/notes.routes");
const userRoutes = require("./routes/user.routes");

//user defined middlware
// server.use("/",loginRoutes);
// server.use("/api/notes",notesRoutes);
server.use("/api/user",userRoutes);