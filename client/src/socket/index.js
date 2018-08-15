import io from 'socket.io-client';

const server = process.env.REACT_APP_LOCAL_SERVER;

const socket = io.connect(server);
export default socket;
