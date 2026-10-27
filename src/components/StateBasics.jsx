import React, { useState } from 'react'

const StateBasics = () => {
    const [typed,setTyped] = useState("apple")

    

    const handleevent = (e)=> setTyped(e.target.value)
  

  return (

    <div className='p-20'>
    <div>StateBasics</div>
    <h1>{typed}</h1>

    <input value={typed} onChange={ handleevent} type="text" name='fullName' className='border border-gray-400 px-8 py-2' />
    </div>
  )
}

export default StateBasics