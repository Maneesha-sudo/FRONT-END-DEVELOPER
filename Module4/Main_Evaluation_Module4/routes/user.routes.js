const express= require("express");
const supabase= require("../config/supabase");
const router = express.Router();
router.post("/signup", async(req , res)=>{
    const {name , email, password , role}=req.body;
    if(!["customer", "owner", "driver"].includes(role)){
        return res.status(400).json({message: "invalid role"});
    }
    const { data, error }= await supabase.from("users").insert([{name, email, password, role}]);
    if(error) return
    res.status(400).json({error: error.message});
    res.json ({message: "user has been created", data});
});
module. exports = router;
