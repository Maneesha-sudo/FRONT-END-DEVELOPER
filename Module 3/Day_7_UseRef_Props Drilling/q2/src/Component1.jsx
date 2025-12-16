import React from 'react'
import Component2 from './Component2'

function Component1() {
  const a = "A";
  const b = "B";
  const c = "C";
  const d = "D";
  const e = "E";
  const f ="F"  
  return (
    <div className="box">
      <Component2 a={a} b={b} c={c} d={d} e={e} f={f}/>
    </div>
  )
}

export default Component1