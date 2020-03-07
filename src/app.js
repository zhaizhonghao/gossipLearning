const Libp2p = require('libp2p');
const WebSockets = require('libp2p-websockets');
const SECIO = require('libp2p-secio');
const MPLEX = require('libp2p-mplex');
const PEER_ID = require('./peer-id.js');

console.log('get peer id:');
PEER_ID.getPeerId().then(id=>{
  console.log(id);
})



