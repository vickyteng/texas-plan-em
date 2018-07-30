import io from 'socket.io-client'

const socket = io.connect("https://texasplan-em-server.herokuapp.com/");
export default socket;