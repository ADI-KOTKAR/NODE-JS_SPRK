const event = require('events')
const e = new event()

//Subscriber should be written before publisher
//ie. first register handler and then emit event
//Subscriber
e.on('myevent',()=>{
    console.log('Data received!!!');
})

//Publisher
e.emit('myevent')


