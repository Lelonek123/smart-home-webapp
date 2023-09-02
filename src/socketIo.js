import { io } from "socket.io-client";

const socket = io("95.48.106.222:1331", {
    autoConnect: false,
    query: {
        type: "webApp",
    },
});

export { socket };
