const { PeerServer } = require('peer');
const port = process.env.PORT || 8080 ;
const peerServer = PeerServer({ port: port, path: '/peerjs' });
