const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
router = require("./router"),
fs= require("fs"),

plainTextContentType = {
    "content-type":"text/plain"
},
htmlContentType = {
    "content-type":"text/html"
}
customeReadFile = (file,res) => {
    fs.readFile(`./${file}`,(error, data) => {
        if(error){
            console.log("Error reading the file");
        }
        res.end(data);
    });
};

router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, plainTextContentType);
    res.end("INDEX");
});

router.get("/index.html", (req,res) =>{
    res.writeHead(httpStatus.OK, htmlContentType);
    customeReadFile("views/index.html",res);
});

router.post("/", (req,res) =>{
    res.writeHead(httpsStatus.OK, plainTextContentType);
    res.end("POSTED");
});

http.createServer(router.handle).listen(port);
console.log(`the server is started and listening on port : ${port}`);
