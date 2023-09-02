import { io } from "socket.io-client";

const socket = io("localhost:1337", {
    autoConnect: false,
    query: {
        type: "webApp",
    },
});

export { socket };
