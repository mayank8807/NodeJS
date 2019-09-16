const httpStatus = require("http-status-codes"),
contentTypes = require("./contentTypes"),
utils = require("./utils");

const routes = {
    "GET":{ },
    "POST": { }
};

exports.handle  = (req, res) => {
    try{
        console.log(req.method);
        console.log(req.url);
        routes[req.method][req.url](req,res);
    }
    catch(ex){
       
        console.log(ex);
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/error.html",res);
    }
};

exports.get = (url, action) =>{
    routes["GET"][url] = action;
};

exports.post=(url,action) =>{
    routes["POST"][url]= action;
};
