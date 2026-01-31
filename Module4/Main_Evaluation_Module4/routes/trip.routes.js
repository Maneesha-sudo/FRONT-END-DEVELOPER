const express= require("express");
const supabase= require("../config/supabase");
const { isAbsolute } = require("path");
const router= express.Router();
router.post("/create", async(req , res)=>{
    const {cus_id, vehicle_id,  allowed_passengers, distance_km , trip_cost}= req.body;
     const { data: vehicle}= await supabase
     .from("vehicles")
     .select("*")
     .eq("id", vehicle_id)
     .single();

     if(!vehicle.isAvailable || allowed_passengers>vehicle.seats){
        return res.status(400).json({message:
            "vehicle is not available"
        });
     }
     await supabase.from("vehicles")
     .update({isAvailable:false})
     .eq("id", vehicle_id);

     const {data, error}=await supabase.from("trips").insert([{
        cus_id,
        vehicle_id,
        allowed_passengers,
        distance_km,
        is_completed:false
     }]);

     if(error) return
     res.status(400).json({error: error.message});
     res.json({message: "trip created", data});
});

router.patch("/end/:tripId", async(req , res)=>{
    const { trip_id} = req.params;
    const {dta: trip}= await supabase
    .from("trips")
    .select("distance_km, vehicles(id)")
    .eq("id", trip_id)
    .single();
   

    const tripCost= trip.distance_km* trip.vehicle.trip_cost;
     await supabase.from("vehicles")
     .update({isAvailable: true})
     .eq("id", trip.vehicle.id)

     await supabase.from("trips")
     .update({is_completed: true, tripCost})
     .eq("id", trip_id)

     res.json({message:"Trip has been ended", tripCost});
});
module.exports= router;