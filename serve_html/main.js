const getViewUrl = (url) => {
    return `views${url}.html`;
};

const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
fs = require("fs");

http.createServer((req,res)=>{
    let viewURL = getViewUrl(req.url);
    fs.readFile(viewURL,(error,data)=>{
        if(error){
            res.writeHead(httpStatus.NOT_FOUND);
            res.write("<h1>FILE NOT FOUND</h1>");

        } else {
            res.writeHead(httpStatus.OK, {
                "Content-type" : "text/html"
            });
            res.write(data);
        }
    })
   
})
.listen(port);
console.log(`The server has started and listening on port : ${port}`);