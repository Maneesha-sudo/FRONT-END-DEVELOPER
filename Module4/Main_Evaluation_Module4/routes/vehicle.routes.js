const express = require("express");
const supabase = require("../config/supabase");
const ratelimiter = require("../middlewares/ratelimiter.middleware");
const router = express.Router();
router.post("/add", ratelimiter, async (req , res)=>{
const {id, name, registration_number , allowed_passengers,
 driver_id, rate_per_km, owner_id, created_at
}= req.body;

const {data, error }= await supabase.from("vehicles").insert([{
    id,
    name,
    registration_number, 
    allowed_passengers,
    driver_id,
    rate_per_km,
    owner_id,
    created_at,
    isAvailable: true
}]);

if(error) return
res.status(400).json({error:
    error.message});
    res.json({message: "vehicle added", data});
});
router.patch("assign-driver/:vehicleId",
    async(req, res)=>{
        const {driver_id }=req.body ;
        const {vehicle_id}=req.params;

        const {data, error}= await supabase
        .from("vehicles")
        .update({driver_id})
        .eq("id", vehicle_id);

        if(error)return
        res.status(400).json({error: error.message});
        res.json({message: "driver has ben assigned", data});
    });
    module.exports = router;