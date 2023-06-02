const express = require("express");
const connection = require("./Config/db");
const dotenv = require("dotenv");
const router = require("./Controller/router");
const cors = require("cors");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

dotenv.config();
connection();

app.use(express.json());
app.use(cors());

io.on("connection", (socket) => {
  console.log("New client connected");
});

app.use("/api", router);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
