import React from 'react'
import Component4 from './Component4'

function Component3({a,b,c,d,e,f}){
  return (
    <div className="box">
      <h4>This is prop a: {a}</h4>
        <h4>This is prop b: {b} </h4>
<Component4 a={a} b={b} c={c} d={d} e={e} f={f}/>
    </div>
  )
}

export default Component3