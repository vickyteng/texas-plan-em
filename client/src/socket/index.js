import io from 'socket.io-client'

const socket = io.connect('/sockets');
export default socket;