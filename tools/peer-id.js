const PeerId = require('peer-id')

exports.getPeerId =  async function(){
    const id = await PeerId.create({ bits: 1024, keyType: 'rsa' });
    return JSON.stringify(id.toJSON(), null, 2);
}


