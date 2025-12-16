import React, { useEffect, useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
function StatusToggle() {

const [Status, setStatus]= useState(false);

function handleClick(){
setStatus(!Status);
}

return(
  <div>
  <button onClick={handleClick}>Toggle Status</button>
  {Status ?<ComponentA/>:<ComponentB/>}
  </div>
);
}

export default StatusToggle;
