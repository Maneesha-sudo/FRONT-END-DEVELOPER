const { raw } = require("body-parser");

const requests={};
const ratelimiter=(req, res, next)=>{
    const ip=req.ip;
    const now=Date.now();

    if(!requests[ip]) requests[ip]=[];
    requests[ip] =requests[ip].filter(t=>
        now - t<60000
    );

    if(requests[ip].length>=3){
        return res.status(429).json({message:
            "rate limit has beem exceeded"
        });
    }
    requests[ip].push(now);
    next();
};
module. exports = ratelimiter;