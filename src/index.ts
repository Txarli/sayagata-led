import { Server } from "socket.io";
import express from "express";
import http from "http";

let isEnabled = false;

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send(`I'm alive! 🎉\nLED strip status -> ${isEnabled ? "ON" : "OFF"}`);
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:8000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("movida", () => {
    console.log("Movida recibida 🎉");

    socket.emit("nuevaMovida");
  });
});

