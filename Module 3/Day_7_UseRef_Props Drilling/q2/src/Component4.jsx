import React from 'react'
import Component5 from './Component5'

function Component4({c,d,e,f}){
  return (
    <div className="box">
      <h4>this is prop c:{c} </h4>
        <h4>this is prop d:{d} </h4>
<Component5 e={e} f={f}/>
    </div>
  )
}

export default Component4