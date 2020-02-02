//import mymodule
var mymodule = require("./getonlineservers");
var http  = require("http");

//Test urls with priorities
var urlJson = [
    {
        "url": "https://doesNotExist.askarvi.com",
        "priority": 12
        },
        {
        "url": "https://www.askarvi.com",
        "priority": 7
        },
        {
        "url": "http://test1.boldtech.co",
        "priority": 2
        },
        {
        "url": "http://www.google.com",
        "priority": 4
        },
        {
        "url": "http://www.yahoo.com",
        "priority": 9
        },
        {
        "url": "https://www.facebook.com",
        "priority": 50
        }
    
];

//calling findServer function to get onling servers with lowest Priority.
mymodule.findServer(urlJson);

function findServer(){
    urlJson.forEach((urlJson,index)=>{
        return new Promise(()=>{
            
        })
    })
}