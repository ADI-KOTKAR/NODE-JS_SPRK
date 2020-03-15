# NODE--JS_SPRK
Includes assignments and important NODE concepts
 
 http status code
  - 2XX -> sucess
  - 3XX -> sucess
  - 4XX -> client side issues
  - 5XX -> server side isssues

  http methods - get,post,put,delete,patch

    put, patch both used for modifying
    put sends the whole json again for updating
    patch just sends the part of json to be updated.

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


Server/HTTP: retuns response(on form of data)
- url: 127.0.0.1:3000/name
    here 127.0.0.1:3000 is the base url
- create a server in node  done in server_1.js


- Express is a framework where API's are written
- Node : Modules, HTTP,
      File Systems: transfer between one file to other includes one step where memory is involved, 
      Streams: sends/transfers data from one file to other directly in form of chunks, prevents use of memory

stream - chunks of data
stream calls event ondata


Clustering - cretes node instances depending on no of cores of system ie. divides the same work/task to be done in  parts. It enhances performance.

https://www.npmjs.com/package/loadtest

