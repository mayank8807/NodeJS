const httpStatus = require("http-status-codes"),
htmlContentType = {
    "content-type":"text/html"
},

routes = {
    "GET" :{
        "/info":(req,res) =>{
            res.writeHead(httpStatus.OK, {
                "content-type":"text/plain"
            })
            res.end("Welcome to the Info page!");
        }
    },
    'POST' :{}
};

exports.handle = (req,res) => {
    try{
        if(routes[req.method][req.url]){
            routes[req.method][req.url](req,res);
        }
        else{
            res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
            res.end("<h1>No Such file exists</h1>");
        }
    }
    catch( ex) {
        console.log("error: " + ex);
    }
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
};

exports.post = (url, action) =>{
    routes["POST"][url] = action;
};