const http=require("http");
const url=require("url")
const myServer=http.createServer((req,res)=>{
    const myURL=url.parse(req.url,true)
    console.log(myURL);
    switch(myURL.pathname){
        case "/":
            if(req.method=="GET"){
            res.end("This is home page");

            break;}
         case "/about":
            
         res.end("This is about Page")  ;
         break;
         case"/contact":
         const num=myURL.query.cont
         res.end("this is contact Page" +num) ;

    }
});
myServer.listen(8000)
