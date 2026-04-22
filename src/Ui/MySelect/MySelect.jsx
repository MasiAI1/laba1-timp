import React from 'react'

function MySelect({defaultSel,opt,selectSort, onChange}) {
  return (
    <select value={selectSort} onChange={(event)=>onChange(event.target.value)} >
        <option disabled value=""> {defaultSel} </option>
      {opt.map((op)=> <option key={op.value} value={op.value}> {op.name} </option>)}
    </select>
  )
}

export default MySelect