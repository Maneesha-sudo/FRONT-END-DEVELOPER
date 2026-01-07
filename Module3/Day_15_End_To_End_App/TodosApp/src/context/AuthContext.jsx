import { createContext, useEffect, useState } from "react";
import Todos from "../pages/Todos";

export const AuthContext= createContext();

const AuthProvider=({children})=>{
const[isAuth, setIsAuth]= useState(false)

useEffect(()=>{
const Authy= localStorage.getItem("isAuth")
if(Authy==="true"){
    setIsAuth(true);
}
},[])

const Login=()=>{
    setIsAuth(true)
    localStorage.setItem("isAuth" , "true")

}
const Signup=()=>{
    setIsAuth(true)
    localStorage.setItem("isAuth" , "true")

}
const Logout=()=>{
    setIsAuth(false)
    localStorage.removeItem("isAuth")
}


return(
<AuthContext.Provider value={{isAuth, Login, Logout, Todos}}>
    {children}
</AuthContext.Provider>
)
};
export default AuthProvider;

