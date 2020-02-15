# NODE--JS_SPRK
Includes assignments and important NODE concepts
 
 http status code
  - 2XX -> sucess
  - 3XX -> sucess
  - 4XX -> client side issues
  - 5XX -> server side isssues

  Promises
  - has three states: 
    1. pending - not resolve/reject
    2. fulfillment - resolve
    3. rejection - reject

Async, await function
    - async function returns promise
    - await which wait until promise gets executed - .then not required if await used

Modules: 
- module.exports.x = x     => {x:20}
- module.exports = x       => 20
- module.exports = func    => function

- module.exports can also be written as exports
- Difference between module.exports and exports - 
  https://blog.tableflip.io/the-difference-between-module-exports-and-exports/

  - module.exports                    exports
        |                               |
        ---------------------------------
                        |
                points to same object

  - cases:


Server: retuns response(on form of data)
- url: 127.0.0.1:3000/name
    here 127.0.0.1:3000 is the base url
    
