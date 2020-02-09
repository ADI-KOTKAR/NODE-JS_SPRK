//modules

let x = 10 

function callDemo(){
    //console.log('call demo function')
    return x
}

//module.exports is an object
//console.log(module.exports)

module.exports.callDemo = callDemo()
module.exports.x = x
//module.exports = callDemo



// module.exports.y = console.log('hi')
//returns undefined if it contains console statements