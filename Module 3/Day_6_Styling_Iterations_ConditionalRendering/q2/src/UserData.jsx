import { useState } from "react";
import React from "react";

function UserData() {
  const [isRed, setIsRed]=useState(true);

function ChangeColory() {
setIsRed(!isRed);
}
return (
  <div>
    <p style={{color:isRed? "red":"blue"}}>This is react app</p>
    <button onClick={ChangeColory}>ChangeColor</button>
  </div>
)
}

export default UserData;
