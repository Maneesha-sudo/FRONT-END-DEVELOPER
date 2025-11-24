function displayCar(){
  console.log("this is car")
}
function displayTruck(){
    console.log("this is truck")

}
function displayBike(){
    console.log("this is bike")

}


vehicleInfo(vehicleCategory, callbackFn){
  console.log("hello")
  callbackFn()
}

vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)



