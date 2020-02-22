//Its a synchronous event

const event = require('events')
const e = new event()

//Subscriber should be written before publisher
//ie. first register handler and then emit event
//Subscriber
e.on('myevent',()=>{
    console.log('Data received!!!');
})
console.log('A');

//Publisher
e.emit('myevent')
console.log('B');



