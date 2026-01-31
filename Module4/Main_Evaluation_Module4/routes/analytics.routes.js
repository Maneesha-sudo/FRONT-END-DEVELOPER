const express= require("express");
const supabase = require("../config/supabase");
const router= express.Router();

router.get("/", async (req, res)=>{
    const users= await
    supabase.from("users")
})