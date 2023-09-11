import { io } from "socket.io-client";

const socket = io("95.48.106.222:1337", {
    autoConnect: false,
    query: {
        type: "webApp",
    },
    cors: {
        origin: "http://95.48.106.222:1337",
    },
});

export { socket };
