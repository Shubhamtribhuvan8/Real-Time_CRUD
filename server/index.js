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
app.use(cors({ origin: "http://localhost:3000" }));

// Socket.IO event handlers
io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("createRecord", (record) => {
    // Broadcast the new record to all connected clients
    io.emit("recordCreated", record);
  });

  socket.on("updateRecord", (record) => {
    // Broadcast the updated record to all connected clients
    io.emit("recordUpdated", record);
  });

  socket.on("deleteRecord", (recordId) => {
    // Broadcast the deleted record ID to all connected clients
    io.emit("recordDeleted", recordId);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

app.use("/record", router);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
