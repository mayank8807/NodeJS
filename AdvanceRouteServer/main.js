const port = 3000,
const http = require("http"),
const httpStatus = require("http-status-code"),
fs = require("fs");

const sendErrorResponse  = res => {
    res.writeHead(httpStatus.NOT_FOUND, {
        "Content-type":"text/html"
    });
    res.write("<h1>File not found!</h1>");
    res.end();
};

http.createServer((req,res)=>{
    let url = req.url;
    if(url.indexOf(".html") !== -1){
        res.writeHead(httpStatus.OK, {
            "content-type":"text/html"
        });
        customReadFile(`./views${url}`,res);
    }
    else if(url.indexOf(".js") !==-1){
        res.writeHead(httpStatus.OK,{
            "content-type":"text/javascript"
        });
        customeReadFile(`./public/js${url}`,res);
    }
    else if(url.indexOf("css")!==-1){
        res.writeHead(httpStatus.OK,{
            "content-type":"text/css"
        });
        customeReadFile(`./public/css${url}`,res);
    }
    else if(url.indexOf(".png")!==-1){
        res.writeHead(httpStatus.OK,{
            "content-type":"image/png"
        });
        customeReadFile(`./public/image${url}`,res);
    }
    else{
        sendErrorResponse(res);
    }
})
.listen(port);

console.log(`The server is started and listening on port : ${port}`);

const customReadFile = (file_path, res) => {
        if(fs.existsSync(file_path)) {
            fs.readFile(file_path, (error, data) => {
                if(error){
                    console.log("error");
                    sendErrorResponse(res);
                    return;
                }
                res.write(data);
                res.end();
            });
        } else {
            sendErrorResponse(res);
        }
};

