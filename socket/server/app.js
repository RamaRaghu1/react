import express from "express";
import { Server } from "socket.io";
import {createServer} from "http";
import cors from "cors"
const app = express();
const PORT = 3000;
const server = createServer(app);
const io = new Server(server, {
    cors:{
        origin:"http://localhost:5173",
        methods:["GET", "POST"],
        credentials:true
    }
});


app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET", "POST"],
    credentials:true
}))
app.get("/", (req, res) => {
  res.send("rama");
});

io.on("connection", (socket) => {
  console.log("user connected");
  console.log("id", socket.id);
  socket.broadcast.emit("welcome", `welcome to the group ${socket.id}`)
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
