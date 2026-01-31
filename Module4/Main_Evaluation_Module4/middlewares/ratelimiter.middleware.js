const { raw } = require("body-parser");

const requests={};
const ratelimiter=(req, res, next)=>{
    const ip=req.ip;
    const now=Date.now();

    if(!requests[ip]) requests[ip]=[];
    requests[ip] =requests[ip].filter(t=>
        now - t<60000
    );
    
}