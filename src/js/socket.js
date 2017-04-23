import { Server } from 'http';
import socketIO from 'socket.io';

class Socket {
    static Instance: SocketIO.Server = null;

    static Init(server: Server) {
        Socket.Instance = socketIO(server);
    }

    static isInitialized = () => Socket.Instance !== null;
}

export default Socket;
