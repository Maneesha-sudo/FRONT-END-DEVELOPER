export const loginUser=(email, password)=>{
    if(email==="admin@gmail.com" && password==="admin1234"){
    
            return {role: "admin"}
        }

        if (email === "customer@gmail.com" && password === "customer1234") {
           return{ role: "customer"}
          }
          return null;
};