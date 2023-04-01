import { Server } from "socket.io";

const io = new Server(3000, {
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
