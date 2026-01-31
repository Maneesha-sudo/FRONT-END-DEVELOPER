require("dotenv").config();
const express= require("express");
const logger = require("./middlewares/logger.middleware");
const notfound= require("./middlewares/notfound.middleware");
const app= express();
app.use(express.json());
app.use(logger);

app.use("/users", require("./routes/user.routes"));
app.use("/users", require("./routes/vehicle.routes"));
app.use("/users", require("./routes/trip.routes"));
app.use("/users", require("./routes/analytics.routes"));

app.use(notfound);
 app.listen(3000, ()=>{
    console.log("server running on port 3000");
 });