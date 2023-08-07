import { io } from "socket.io-client";

const socket = io("localhost:2000", {
    autoConnect: false,
    query: {
        type: "webApp",
    },
});

export { socket };
