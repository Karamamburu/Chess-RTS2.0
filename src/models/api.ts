import { io, Socket } from "socket.io-client";

async function getStartingPositions() {
  const socket: Socket = io("ws://localhost:9000");

  socket.emit("ws");

  socket.on("ws_response", (data: any) => {
    console.log("Получены данные с сервера:", data);
  });
}

export { getStartingPositions };
